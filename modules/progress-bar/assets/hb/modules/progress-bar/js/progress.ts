export default class Progress {
    private ele: HTMLElement

    private bar: HTMLElement

    private width = 20

    private step = 1

    private interval = 25

    constructor() {
        this.initBar()
        this.initProgress()
    }

    private initProgress() {
        const progress = document.createElement('div')
        progress.className = 'hb-progress progress position-fixed top-0 w-100 rounded-0 d-none'
        progress.role = 'progressbar'
        progress.appendChild(this.bar)
        document.body.appendChild(progress)
        this.ele = progress
    }

    private initBar() {
        const bar = document.createElement('div')
        bar.className = 'progress-bar progress-bar-striped progress-bar-animated'
        bar.style.width = this.width + 'px'
        this.bar = bar
    }

    show() {
        this.ele.classList.remove('d-none')
        setInterval(() => {
            this.width += this.step
            this.bar.style.width = `${this.width}%`
        }, this.interval)
    }
}
