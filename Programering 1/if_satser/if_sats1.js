let tal = prompt("Ange en siffra.")
//let tal = 25

console.log(`${tal}`)

//Ska kolla om talet är jämnt eller udda.

//modulusoperator. % = modulus. Den ger resten vid en heltalsdivision.
//console.log(`${tal%2}`)

//tal%2 är 0 = Jämnt
//tal%2 är 1 = Udda

if (tal > 0 ){
    console.log("Positivt")
} else if (tal == 0){
    console.log("Talet är 0")
} else {    
    console.log("Negativt")
}

if (tal%2 === 0){
    console.log("Jämnt")
} else {
    console.log("Udda")
}