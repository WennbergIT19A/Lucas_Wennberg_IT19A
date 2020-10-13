let namn ="Lucas"

function sayHello(){
    console.log(`Hej ${namn}`)
}

sayHello()
sayHello()

function addera(tal1, tal2){
    let summa = tal1+tal2
    return summa
}

console.log(`2+5=${addera(2,5)}`)

function subtrahera(tal1, tal2){
    let summa = tal1-tal2
    return summa
}

console.log(`5-2=${subtrahera(5,2)}`)

function multiplicera(tal1, tal2){
    let summa = tal1*tal2
    return summa
}

function dividera(tal1, tal2){
    let summa = tal1/tal2
    return summa
}

console.log(`5/2=${dividera(5,2)}`)