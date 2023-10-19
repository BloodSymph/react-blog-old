export const titleAnimation = {
    hidden: {
        x: -200,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            delay: custom * 0.2
        }
    })
}

export const textAnimation = {
    hidden: {
        x: -200,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 0.60,
        transition: {
            duration: 0.7,
            delay: custom * 0.2
        }
    })
}