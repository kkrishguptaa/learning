/**
 * Adapted from https://codingbeautydev.com/blog/javascript-convert-csv-to-json/
 * @param {string} csv 
 */

function csvToJson(csv) {
    const lines = csv.split('\n')

    const headers = lines[0].split(',')

    lines.shift()

    const data = lines.map(line => {
        const r = {}

        const values = line.split(',')

        values.forEach((v, i) => {
            r[headers[i]] = v
        })

        return r
    })

    return data
}

/**
 * Own code
 */

/**
 * @type {HTMLTextAreaElement}
 */
const textbox = document.getElementById('csv')
const jsondiv = document.getElementById('json')

function main () {
    const json = csvToJson(textbox.value)

    jsondiv.innerText = JSON.stringify(json, undefined, 2)
}

textbox.onkeydown = main
textbox.onchange = main

const clipboard = document.getElementById('clipboard')

clipboard.onclick = () => {
    navigator.clipboard.writeText(JSON.stringify(csvToJson(textbox.value), undefined, 2))
}
