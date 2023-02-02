import Progress from "./progress";

(() => {
    const progress = new Progress()

    window.addEventListener('beforeunload', () => {
        progress.show()
    })
})()
