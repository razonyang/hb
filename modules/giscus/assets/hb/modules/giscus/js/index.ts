import Giscus from 'giscus/js'
(() => {
    'use strict'

    const giscus = new Giscus()

    const setTheme = (theme = '') => {
        if (theme === '') {
            const saved = localStorage.getItem('hb-theme') ?? ''
            theme = saved && saved === 'auto' ? getPreferredTheme() : saved
        }

        giscus.setTheme(theme)
    }

    const getPreferredTheme = () => {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.body.addEventListener('giscus-load', () => {
            // change the theme after loading the giscus frame.
            const frame = document.querySelector('iframe.giscus-frame.giscus-frame--loading')
            frame?.addEventListener('load', () => {
                setTheme()
            })
        })

        // make sure iframe those missed the "giscus-load" event to be set as the right theme.
        setTimeout(() => {
            setTheme()
        }, 2000)

        document.addEventListener('hb:theme', ((e: CustomEvent) => {
            setTheme(e.detail.theme)
        }) as EventListener)
    })
})()
