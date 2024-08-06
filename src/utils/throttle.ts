/**
 * @description: 节流函数
 * @param {Function} fn 需要节流的函数
 * @param {number} delay 延迟时间
 * @return {*}
 */
export default function throttle(fn: Function, delay: number) {
    let timer: any = null;
    return function (this: any, ...args: any[]) {
        if (timer) return;
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay);
    };
}

/**
节流-多次触发-执行第一次
*/