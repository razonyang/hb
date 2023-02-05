(() => {
    'use strict'

    document.querySelectorAll('table').forEach((table) => {
        const wrapper = document.createElement('div')
        wrapper.className = 'table-responsive'
        wrapper.appendChild(table.cloneNode(true))
        table.parentNode?.replaceChild(wrapper, table)
    })
})()
