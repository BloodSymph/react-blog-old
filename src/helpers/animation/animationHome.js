export const titleAnimation = {
    hidden: {
        x: 1000,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2, duration: 1}
    })
}

export const paragraphAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 0.60,
            transition: {delay: custom * 0.2, duration: 0.6}
        })
    }

export const buttonAnimation = {
        hidden: {
            y: 300,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2, duration: 0.6}
        })
    }