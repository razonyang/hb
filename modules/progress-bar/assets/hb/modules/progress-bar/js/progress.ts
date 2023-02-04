import * as params from "@params";

export default class Progress {
    private ele: HTMLElement

    private bar: HTMLElement

    private width: number

    private interval: number 

    private step: number

    constructor() {
        this.width = params?.progress_bar?.width ?? 20
        this.interval = params?.progress_bar?.interval ?? 50
        const time = params?.progress_bar?.time ?? 2 
        this.step = (100 - this.width) / time / 1000 * this.interval
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
        bar.style.width = this.width + '%'
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
