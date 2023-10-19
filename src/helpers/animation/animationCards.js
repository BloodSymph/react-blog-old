export const columnAnimation = {
    hidden: {
        y: 200,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            delay: custom * 0.2
        }
    })
}
