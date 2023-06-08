const keys = [
    'topleft',
    'topright',
    'bottomleft',
    'bottomright'
]

/**
 * @type {Array<HTMLInputElement}
 */
const values = keys.map(item => document.getElementById(item))

/**
 * @type {Array<HTMLSelectElement>}
 */
const units = keys.map(item => document.getElementById(item + 'unit'))

const box = document.getElementById('box')

const els = [...values, ...units]

els.forEach(el => {
    el.onchange = () => {
        const rad = keys.map((_, i) => `${values[i].value ?? '0'}${units[i].value}`).join(' ')

        box.animate([{}, {
            borderRadius: rad
        }], {
            duration: 600,
            fill: 'forwards',
            easing: 'ease'
        })
    }
})