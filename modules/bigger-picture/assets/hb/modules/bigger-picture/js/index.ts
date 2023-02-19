import BiggerPicture from 'bigger-picture/bigger-picture.umd.js'

(() => {
    const bp = BiggerPicture({
        target: document.body,
    })

    const images = document.querySelectorAll('img')
    for (const img of images) {
        // ignore linkable images.
        if (img.parentElement?.tagName === 'A') {
            continue
        }

        img.addEventListener('click', () => {
            bp.open({
                items: [{
                    img: img.src,
                    height: img.naturalHeight,
                    width: img.naturalWidth,
                }],
                intro: 'fadeup'
            })
        })
    }
})()
