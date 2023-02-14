// Cloudflare rocket loader dose not trigger the DOMContentLoaded event.
(() => {
    let fired = false
    window.addEventListener("DOMContentLoaded", function () {
        fired = true
    })

    if (document.readyState === "loading") {
        window.addEventListener("load", function () {
            !fired && window.dispatchEvent(new Event("DOMContentLoaded"))
        })
    }
})()
