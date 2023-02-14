// Cloudflare rocket loader dose not trigger the DOMContentLoaded event.
(() => {
    let cfRocketLoader = true
    window.addEventListener("DOMContentLoaded", function () {
        cfRocketLoader = false
    })

    if (document.readyState === "loading") {
        window.addEventListener("load", function () {
            cfRocketLoader && window.dispatchEvent(new Event("DOMContentLoaded"))
        })
    }
})()
