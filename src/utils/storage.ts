import EncryptionComponent from "./encrypt";

/**
* @description: 存储类型
*/
enum StorageType {
    l = 'localStorage', // 本地存储
    s = 'sessionStorage', // 会话存储
    c = 'cookie' // cookie
}

// 过期时间类型
interface ExpireTime {
    value: any;
    expires?: number;
}

/**
 * @description: 存储类
 */
class MyStorage {
    storageType: StorageType;
    storage: Storage | string
    constructor(type: StorageType) {
        this.storageType = type;
        this.storage = type === StorageType.l ? localStorage : type === StorageType.s ? sessionStorage : document.cookie;
    }

    /**
     * 设置值
     * @param key 键
     * @param value 值
     * @param expires 过期时间ms
     */
    set(key: string, value: any, expires?: number) {
        const source: ExpireTime = { value: null }
        if (expires) { // 过期时间 默认 1个月
            source.expires = expires ? new Date().getTime() + expires : new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
        }
        const enc = EncryptionComponent.getInstance().encrypt(value) // 储存加密后的值
        source.value = enc
        const data = JSON.stringify(source);
        if (this.storageType === StorageType.c) {
            let cookieString = `${key}=${enc};path=/;`;
            if (expires) {
                cookieString += ` expires=${new Date(source.expires as number).toUTCString()}`
            }
            document.cookie = cookieString;
        } else {
            (this.storage as Storage).setItem(key, data);
        }
    }
    // 获取值
    get(key: string) {  
        if (this.storageType === StorageType.c) {        
            const cookie = document.cookie;         
            const arr = cookie.split(';');            
            for (let i = 0; i < arr.length; i++) {
                const item = arr[i].split('=');
                if (item[0].trim() === key) {
                    return EncryptionComponent.getInstance().decrypt(item[1].trim());
                }
            }
        } else {
            if ((this.storage as Storage).getItem) {
                const value = (this.storage as Storage).getItem(key);
                if (value) {
                    const source: ExpireTime = JSON.parse(value);
                    const expires = source.expires;
                    if (expires && expires < new Date().getTime()) {
                        this.remove(key);
                        return;
                    }
                    return EncryptionComponent.getInstance().decrypt(source.value);
                }
            }
        }
        return;
    }
    // 删除值
    remove(key: string) {
        if (this.storageType === StorageType.c) {
            document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
        } else {
            (this.storage as Storage).removeItem(key);
        }
    }
    // 清空值
    clear() {
        if (this.storageType === StorageType.c) {
            document.cookie = '';
        } else {
            (this.storage as Storage).clear();
        }
    }
}

// export default MyStorage;

const LStorage = new MyStorage(StorageType.l);
const SStorage = new MyStorage(StorageType.s);
const Cookie = new MyStorage(StorageType.c);
export { LStorage, SStorage, Cookie };