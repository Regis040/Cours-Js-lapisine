
        // Pésentation des opoérateur arithmétiques

/* Commentaire sur plusieurs lignes */
/** variante de commentaires sur plusieurs lignes */

// var myNumber1 = 9 + 1 
// var myNumber2 = 4

// myNumber = 6

// var myResult  = myNumber1 * myNumber2

// console.log(myNumber1, myNumber2, myResult)

        // Déclaration moderne (en ES6 , javascript depuis 2015) de variables

// const myNb1 = 9
// let myNb2 = 3

// myNb2  += 5

// const res = myNb1 * myNb2

// console.log(res)

        // Les chaines de charactères (string)  ""  ''  ``

// let myName = "Je m'appelle Paul"
// let lastname =  `Doazan`
// const age = 35;
// let modifiedAge = age + 5

// let myName2 = ' ' + lastname _ += 7
// myName2 += ', ' + age + ' ans.'

// const resultStr = `${myName} et j'ai ${modifiedAge} ans.`

// console.log(myName2, myName)
// console.log(modifiedAge)


                // THE BOOLEANS


// const myBoolean1 = true
// const myBoolean2 = false

// let myAge = 18 
// const legalAge = 18

// const isAdult = myAge >= legalAge

// const is30yearsOld = myAge == 30

// if (isAdult) {
//     console.log(`Paul est adulte`)
// }
// if (!isAdult) {
//     console.log(`Paul n'est pas adulte`)
// }

// if(isAdult ) {
//     console.log(`Paul est adulte`)
// } else {
//     console.log(`Paul n'est pas adulte`)
// }

// if(is30yearsOld ) {
//     console.log(`Paul a trente ans`)
// } else {
//     console.log(`Paul n'a pas trente ans`)
// }


// const bigNb1 = 600
// const bigNb2 = 600

// // Ecrire la condition pour afficher le plus grand nombre


// if (bigNb1>bigNb2) {
//     console.log(bigNb1)
// } else if (bigNb1<bigNb2) {console.log(bigNb2)   
// } else if (bigNb1==bigNb2) {
//     console.log(bigNb1, bigNb2)
// }

// // const resultComparaison

// const resultComparaison = bigNb1 > bigNb2

// if (resultComparaison) {
//     console.log(bigNb1)
// } else {
//     console.log(bigNb2)
// }

// const firstname = "Olivier"


// if (firstname == "Hamid") {
//     console.log (`Bonjour mon cher ` + firstname)
// } else if (firstname == `Pauline`) {
//     console.log (`Bonjour ma chère ` + firstname)
// } else {
// // Réécrire le message loggé avec des backticks ``
// // consol.log (`Bonjour ` + firstname + ` , je ne connaissais pas ton prénom avant`)
//     console.log (`Bonjour  ${firstname}  , je ne connaissais pas ton prénom avant.`)
// }


        // variable complexe :les tableaux (Array)

// let arr1 = [3, 5, 12, 204.5, 'hello', false, 'world']

// const firstElement = arr1[4]

// console.log(firstElement)
// console.log(arr1[4])

// let arrResult1 = arr1[0] + arr1[1]

// console.log(arrResult1)

// let arrResult2 = `${arr1[4]} - ${arr1[6]}`

// console.log(arrResult2)


let arr1 = [3, 5, 12, 204.5, 'hello', false, 'world']

let arrResult2
// On test le booléen du tableau
if ("truthy") {
    arrResult2 = `${arr1[4]} - ${arr1[6]}`
} else { 
    arrResult2 = arr1[1] + arr1[3]
}

// console.log(arrResult2)

// changement de valeur
// arr1[4] = "bonjour"
// console.log(arr1)

// changer la valeur de 204,5 en 190 par soustraction
// arr1[3] -= 14.5
// console.log (arr1)

//             // variable complexe : les objets
// let obj1 = {
//     maPremierePropriete: 12,
//     maDeuxiemePropriete: 14,
//     prop3: 11,
//     prop9: 'hello'
// }

// console.log(obj1.prop9)


// A l'aide de l'objet précéedent, construire
// la chaine de caractère ==> Je m'appelle Paul Doazan, j'ai 35 ans et j'habite à Talence.

let identity1 = {
    firstname1:'Paul',
    lastname1: 'Doazen',
    age1: 35,
    town1:'Talence'
}

console.log (`Je m'appelle ${identity1.firstname1} ${identity1.lastname1} , j'ai ${identity1.age1}  et j'habite ${identity1.town1}` )

// Pour ceux qui ont terminé, créer un deuxième objet identity2, 
// stocker identity et identity 2 dans un tableau, 
// et écrire la phrse précédente en utilisant le tabaleau.

let identity2 = {
    firstname2:'Régis',
    lastname2: 'Jouan',
    age2: 54,
    town2:'Bisca'
}

let arrIdentity1 = [identity1]
let arrIdentity2 = [firstname2, lastname2, age2, town2]

console.log(arrIdentity1)

