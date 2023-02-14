export default class Button {
    private btn: HTMLButtonElement

    constructor(icon: string) {
        const btn = document.createElement('button')
        btn.className = 'hb-back-to-top'
        btn.ariaLabel = 'Back to top'
        btn.innerHTML = icon
        document.body.appendChild(btn)
        this.btn = btn

        let y = 0
        window.addEventListener('scroll', () => {
            const top = document.documentElement.scrollTop
            if (document.body.scrollTop > 20 || top > 20) {
                this.show();
            } else {
                this.hide();
            }
            if (top > y) {
                btn.classList.remove('scrolling')
            }
            y = top
        });

        this.btn.addEventListener('click', () => {
            btn.classList.add('scrolling')
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
        })
    }

    show() {
        this.btn.classList.add('show')
    }

    hide() {
        this.btn.classList.remove('show')
    }
}
