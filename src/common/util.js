export function debounce(func, dalay) {
    var timer = null;
    return function(...arg) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, arg)
        }, dalay)

    }
}