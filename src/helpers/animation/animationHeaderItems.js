export const titleAnimation = {
    hidden: {
        x: -200,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.5, duration: 0.7}
    })
}

export const paragraphAnimation = {
    hidden: {
        x: -200,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 0.65,
        transition: {delay: custom * 0.5, duration: 0.7}
    })
}