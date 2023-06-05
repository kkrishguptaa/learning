/**
 * @type {HTMLTextAreaElement}
 */
const textarea = document.getElementById('input')
const outputDiv = document.getElementById('output')
const output = outputDiv.innerText

const notBinaryRegex = new RegExp('[^01]*', 'g')

/**
 * 
 * @param {GlobalEventHandlers} _ 
 * @param {KeyboardEvent} ev
 */
textarea.onkeyup = (_, ev) => {
    textarea.value = textarea.value.replace(notBinaryRegex, '')
    const input = textarea.value

    const converted = chunkString(input, 8).map(v => parseInt(v, 2).toString()).join(' ')

    outputDiv.innerText = converted
}

/**
 * 
 * @param {string} str 
 * @param {number} length 
 */
function chunkString(str, length) {
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
  }