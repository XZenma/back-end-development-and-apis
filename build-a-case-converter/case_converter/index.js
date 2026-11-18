module.exports = {
    getUpperCase,
    getLowerCase,
    getSentenceCase,
    getProperCase
}

function getUpperCase(text) {
    return text.toUpperCase();
}

function getLowerCase(text) {
    return text.toLowerCase();
}

function getSentenceCase(text) {
    const first_char = text.slice(0, 1).toUpperCase();
    const rest_of_text = text.slice(1, text.length).toLowerCase();

    return first_char + rest_of_text;
}

function getProperCase(text) {
    const array = text.split(' ')
    let first_char;
    let rest_of_word;
    let completed_text;

    for (const [index, word] of array.entries()) {
        first_char = word.slice(0, 1).toUpperCase();
        rest_of_word = word.slice(1, word.length).toLowerCase();

        if (index > 0) {
            completed_text = completed_text + " " + first_char + rest_of_word
        } else {
            completed_text = first_char + rest_of_word
        }
    }

    return completed_text

}