(() => {
    const progress = document.createElement('div')
    progress.className = 'hb-progress-bar progress position-fixed top-0 w-100 rounded-0'
    progress.role = 'progressbar'

    const bar = document.createElement('div')
    bar.className = 'progress-bar progress-bar-striped progress-bar-animated'
    progress.appendChild(bar)

    let width = 10

    window.addEventListener('beforeunload', () => {
        document.body.appendChild(progress)
        setInterval(() => {
            width += 1
            bar.style.width = `${width}%`
        }, 100)
    })
})()
