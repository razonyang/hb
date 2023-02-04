(() => {
    'use strict'

    const show = (btn) => {
        btn.classList.add('show')
    }

    const hide = (btn) => {
        btn.classList.remove('show')
    }

    window.addEventListener('DOMContentLoaded', () => {
        const btn = document.querySelector('.hb-back-to-top');

        let y = 0
        window.addEventListener('scroll', () => {
            const top = document.documentElement.scrollTop
            if (document.body.scrollTop > 20 || top > 20) {
                show(btn);
            } else {
                hide(btn);
            }
            if (top > y) {
                btn.classList.remove('scrolling')
            }
            y = top
        });

        btn?.addEventListener('click', () => {
            btn.classList.add('scrolling')
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })

        })
    })
})()
