export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        value: nr
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT',
    }
}