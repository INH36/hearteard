
/**
 * 防抖函数
 * @param fn 需要防抖的函数
 * @param delay 延迟时间
 * @returns
 */
export default function debounce(fn: Function, delay: number) {
    let timer: any = null;
    return function (this: any, ...args: any[]) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

/**
防抖-多次触发-执行最后一次
*/