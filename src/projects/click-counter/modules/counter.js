export const createCounter = (initialValue = 0) => {
    let count = initialValue;

    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => {
            count = initialValue;
            return count;
        },
        getCount: () => count
    };
};