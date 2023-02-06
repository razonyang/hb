import Utterances from 'utterances/js'

(() => {
    'use strict'

    const utterances = new Utterances()

    const setTheme = (theme = '') => {
        if (theme === '') {
            const saved = localStorage.getItem('hb-theme')
            theme = (!saved || saved === 'auto') ? getPreferredTheme() : saved
        }

        utterances.setTheme(`github-${theme}`)
    }

    const getPreferredTheme = () => {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    document.addEventListener('DOMContentLoaded', () => {
        // make sure iframe those missed the hb:theme event to be set as the right theme.
        setTimeout(() => {
            setTheme()
        }, 2000)

        document.addEventListener('hb:theme', ((e: CustomEvent) => {
            setTheme(e.detail.theme)
        }) as EventListener)
    })
})()
