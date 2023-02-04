(() => {
    document.addEventListener('DOMContentLoaded', () => {
        // reload Disqus comments widget on changing theme.
        document.addEventListener('hb:theme', () => {
            DISQUS?.reset({
                reload: true,
            })
        })
    })
})()
