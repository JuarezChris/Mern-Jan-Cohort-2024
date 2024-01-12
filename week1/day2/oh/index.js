

const palidrome = (event, id) => {
    event.preventDefault()
    console.log(id)
    return word.split("").reverse().join("") == word
}

const handleSubmit = (e, word) => {
    e.preventDefault()
    console.log(document.getElementById(word).value)
}
