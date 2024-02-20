import formSettings from "./formSettings.js";

//1)vykresli formulář
const container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)

const form1 = document.createElement("form")
form1.textContent = "Jméno:"
form1.classList.add("form")

const input1 = document.createElement("input")
input1.classList.add("input")
container.appendChild(form1)
container.appendChild(input1)

const form2 = document.createElement("form")
form2.textContent = "Příjmení:"
form2.classList.add("form")
container.appendChild(form2)

const input2 = document.createElement("input")
input2.classList.add("input")
container.appendChild(input2)

const form3 = document.createElement("form")
form3.textContent = "Datum narození:"
form3.classList.add("form")
container.appendChild(form3)

const input3 = document.createElement("input")
input3.classList.add("input")
container.appendChild(input3)

const form4 = document.createElement("form")
form4.textContent = "Komentář:"
form4.classList.add("form")
container.appendChild(form4)

const comment = document.createElement("textarea")
comment.classList.add("comment")
container.appendChild(comment)

const errorDiv = document.createElement("div")
errorDiv.classList.add("error-message")
errorDiv.classList.add("is-hidden")
// errorDiv.textContent = "test error message"
container.appendChild(errorDiv)


//2) Při bluru každé kontrolky zapište hodnotu do formDate[kontrolka], pokud splňuje
//všechna předepsaná valRules
//Pokud je nesplňuje, zobrazte chybovou hlášku

input1.addEventListener("blur", (e) => {
    if(e.target.value.length <= 0 || e.target.value.length > 50) {
        errorDiv.textContent = "Špatně vyplněné křestní jméno!"
        errorDiv.classList.remove("is-hidden")
        errorDiv.classList.add("is-visible")
    } else {
        errorDiv.classList.remove("is-visible")
        errorDiv.classList.add("is-hidden")
    }
})
input1.addEventListener("keydown", (e) => {
    if(/^[0-9]$/.test(e.key)) {
        e.preventDefault()
    }
})


input2.addEventListener("blur", (e) => {
    if(e.target.value.length <= 0 || e.target.value.length > 100) {
        errorDiv.textContent = "Špatně vyplněné příjmení!"
        errorDiv.classList.remove("is-hidden")
        errorDiv.classList.add("is-visible")
    } else {
        errorDiv.classList.remove("is-visible")
        errorDiv.classList.add("is-hidden")
    }
})
input2.addEventListener("keydown", (e) => {
    if(/^[0-9]$/.test(e.key)) {
        e.preventDefault()
    }
})

const formDate = {
    firstname: "",
    lastname: "",
    dateofbirth: "",
    comment: ""
}