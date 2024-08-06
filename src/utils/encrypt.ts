import CryptoJS from 'crypto-js'



/**
 * 密钥默认为 `123456`
 */
class EncryptionComponent {

    private static instance: EncryptionComponent | null = null
    private key: string

    private constructor(key: string) {
        this.key = key
    }

    public static getInstance(key: string = '123456'): EncryptionComponent {
        if (!this.instance) {
            this.instance = new EncryptionComponent(key)
        }
        return this.instance
    }
    /**
     * 加密
     * @param data 数据
     * @returns 加密后的结果
     */
    encrypt(data: string | object) {
        if (typeof data === 'object' && data !== null) {
            data = JSON.stringify(data)
        }
        const encrypted = CryptoJS.AES.encrypt(data, this.key).toString()
        return encrypted
    }
    /**
     * 解密
     * @param data 数据
     * @returns 解密后的结果
     */
    decrypt(data: string | null) {
        if (!data) return null
        const decrypted = CryptoJS.AES.decrypt(data, this.key)
        const decryptedData = decrypted.toString(CryptoJS.enc.Utf8)
        try {
            return JSON.parse(decryptedData)
        } catch (err) {
            return decryptedData
        }
    }
}

export default EncryptionComponent