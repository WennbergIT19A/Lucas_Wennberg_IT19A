// En variabel som heter name och tilldelar värdet "Wennberg"
let name = "Wennberg"

console.log(`Hej ${name}`)

//skapa variablern tal1, tal2, tal3
//tilldela variabler med värden 3, 4, 5
//Räkna ut medelvärdet av dem

let tal1 = 3
let tal2 = 4
let tal3 = 5

let medelvarde = (tal1+tal2+tal3)/3

//räkna ut medelvärdet
console.log(`(${tal1}+${tal2}+${tal3})/3 = ${medelvarde}`)

let bredd = prompt("Ange bredden på rektangeln")
let langd = prompt("Ange längden på rektangeln")

let area = bredd*langd

console.log(`Bredden på rektangeln är ${bredd} l.e`)
console.log(`Längden på rektangeln är ${langd} l.e`)
console.log(`Arean av rektangeln är ${area} a.e`)