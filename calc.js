let result = document.querySelector('#inputtext')

let calculate = (number) => {
    result.value += number
}

let equal = () => {
    try {
        result.value = eval(result.value)
    } catch (err) {
        alert("enter the valid inpit")
    }
}

let clr = () => {
    result.value = " "
}

let del = () => {
    result.value = result.value.slice(0, -1)
}