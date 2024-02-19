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

//2) Při bluru každé kontrolky zapište hodnotu do formDate[kontrolka], pokud splňuje
//všechna předepsaná valRules
//Pokud je nesplňuje, zobrazte chybovou hlášku
const formDate = {
    firstname: "",
    lastname: "",
    dateofbirth: "",
    comment: ""
}