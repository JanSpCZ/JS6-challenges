//pomocí forEach projet klíče těchto polí a vytvořit z toho formulář

const formSettings = {
    firstname: {
        type: "text",
        label: "first name",
        valRules: ["required", "maxLength50"]
    },
    lastname: {
        type: "text",
        label: "last name",
        valRules: ["required", "maxLength100"]
    },
    dateofbirth: {
        type: "date",
        label: "date of birth",
        placeholder: "DD.MM.RRRR",
        valRules: ["required", "isPast"]
    },
    comment: {
        type: "textarea",
        label: "please leave your comment",
        rows: 10,
        cols: 45,
        valRules: ["required", "maxLength500"]
    }
}

//kontrolky
//const controls = Object.keys(formSettings) // ["firstname", "lastname", "dateofbirth", "comment"]

export default formSettings