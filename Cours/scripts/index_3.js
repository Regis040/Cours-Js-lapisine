                            //// Révision

// const monday =`lundi`
// const tuesday =`mardi`

// displayMessage(tuesday)
// displayMessage(monday)
// displayMessage(`samedi`)
// displayMessage(30)

// function displayMessage(day) {
//     let hello = `salut`
//     console.log(`${hello} c'est ${day} !`)
// }

                            // // suite ...

// const person_1 = {
//     name: `Pierre`,
//     hasCar: true,
//     hasBike: true,
//     isSick: true
// }

// const person_2 = {
//     name: `Melanie`,
//     hasCar: true,
//     hasBike: false,
//     isSick: false
// }

// const person_3 = {
//     name: `Paul`,
//     hasCar: false,
//     hasBike: true,
//     isSick: true
// }
// const person_4 = {
//     name: `Sophie`,
//     hasCar: true,
//     hasBike: false,
//     isSick: false
// }

// // Intégrer le paramètre person aux 2 fonction pour rendre la cahine de caractère dynamique
// canGoToUniversity(person_3)
// canGoTopOfMountain(person_4)


// function canGoToUniversity(person) {
//             console.log(`${person.name} peut aller à l'université`)
// }

// function canGoTopOfMountain(person) {
//     console.log(`${person.name} ne peut aller au sommet à la montagne`)   
// }
                                             //// suite de l'exercice

// canGoToUniversity(person_1)
// canGoToUniversity(person_2)
// canGoToUniversity(person_3)
// canGoToUniversity(person_4)
// canGoTopOfMountain(person_1)
// canGoTopOfMountain(person_2)
// canGoTopOfMountain(person_3)
// canGoTopOfMountain(person_4)


// function canGoToUniversity(person) {
//     if ((person.hasCar || person.hasBike) && !person.isSick) {                      // le || signifie "or" ...les () sont utilisées comme en maths
//         console.log(`${person.name} peut aller à l'université`)
//     } else {
//         console.log(`${person.name} ne peut pas aller à l'université`)
//     }

// }

// function canGoTopOfMountain(person) {
//     if(person.hasCar && person.hasBiken && !person.isSick){     // opérateur de comparaison complexe : "and" // le &&! signifie ne soit pas 
//         console.log(`${person.name} ne peut aller au sommet à la montagne`)   
//     } else {

//     }
//     console.log(`${person.name} ne peut aller au sommet à la montagne`)   
// }

                                                // // Les boucles
                                                // // 
                                                // //
// au lieu d'écrire ... 
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(3)

// on ecrit ....

// for (let i = 0; i <= 10; i += 1 ) {  //  A la place de  i+= 1 on peut  remplacer par i++
//     console.log(`salut` + i)
// }

// for (let i = 0; i <= 10; i += 2 ) {  //  de 2 en 2 .... "d'où'on art, jusquou on va et comment on y va"
//     console.log(`salut` + i)
// }

                                        // suite
// let arr = [3, 5 , 12, 8, 1]

//     for (let i = 0; i < arr.length; i++) {
//         console.log(i)  // affiche les numeros d'indice du tableau
        
//     }
//     ////suite


//    for (let i = 0; i < arr.length; i += 1 ) {  
   
//         console.log(`Element courant : ` + arr[i])   // il va jusqu'à 5 ... 
    // }
                                  
                                         //// Exercice : Ajouter un if dans la boucle for pour afficher que les éléments dont la valeur est >= 5
// let arr = [3, 5 , 12, 8, 1]   // 3,5,1, ...sont des indices
// for (let i = 0; i < arr.length; i += 1 ) {  
//    if (arr[i] >= 5 ) {
//     console.log(`Element courant : ` + arr[i])  
//    }     
// }

                            // // suite // écrire une boucle for pour additionner tous les éleme,nts d'un tableau

// let numbers = [3, 5 , 12, 8, 1, 4]  

// let sum = 0;

// for (let i = 0; i < numbers.length; i += 1 ) {  
//         sum += numbers[i]    // l'equivalent de numbers[0] + numbers[1] + ...
// }
// console.log(sum)

//                         // // si ...

//                         let numbers = [3, 5 , 12, 8, 1, 4]  

                        
                        
//                         for (let i = 0; i < numbers.length; i += 1 ) {  
//                             let sum = 0;
//                                 sum += numbers[i]    // l'equivalent de numbers[0] + numbers[1] + ...
//                                 console.log(sum)
//                         }
                       
                        // // ce sera 4 car la fonction part du sum = 0 et ajouter 1 index : 0+3 puis 0+5 et finit par 4


                                    // // A laide d'une boucle for, trouver la valeur la plus grande dans qle tableau


// let numbers = [3, 5 , 12, 8, 1, 4]  

// let max = 0

// for (let i = 0; i < numbers.length; i += 1 ) {  
//         if(numbers[i] > max)     {
//             max = numbers [i]
//         }
// }
// console.log(max)

                                    // //Nouvel exercice : afficher uniquement les nombres strictement supérieur à 4
                                    // 5, 12 et 8

// let numbers = [3, 5 , 12, 8, 1, 4]  


// for (let n = 0; n < numbers.length; n += 1 ) {  
//         if(numbers[n] > 4)     {
//             console.log(`les nombres supérieurs à 4 sont : ${numbers[n]}` )
//         }
// }

                                        // // autre exercice. avec un tableau vide que l'on remplit avec les données d'un autre tableau avec condition
// let numbers = [3, 5 , 12, 8, 1, 4]  
// let filtredNumbers = []  


      
// }

                                // //Encapsuler le script précédent dans une fonction et y ajouter le paramètre limit
// let numbers = [3, 5 , 12, 8, 1, 4]  

// const arrayResult = filterArray(3)


// function filterArray(limit) {
//     let filtredNumbers = [] // on récupère dans un tableau vide "filterNumbers" les données sup à "limit" présent dans le tableau "numbers"

//     for(let n = 0; n < numbers.length; n++) {
//         if(numbers[n] > limit) {
//             filtredNumbers.push(numbers[n])
//         }
//     }
//     console.log(filtredNumbers)
// }

                                        //// Ecrire une boucle for pour afficher dans un nouveau tableau toutes les personnes malades (isSick == true)
const persons = [{
    name: `Pierre`,
    hasCar: true,
    hasBike: true,
    isSick: true
},
{
    name: `Melanie`,
    hasCar: true,
    hasBike: false,
    isSick: false
},
{
    name: `Paul`,
    hasCar: false,
    hasBike: true,
    isSick: true
},
{
    name: `Sophie`,
    hasCar: true,
    hasBike: false,
    isSick: false
}]

let sickPersons = []

for (let i = 0; i < persons.lenght; i++) {
        
        if (persons[i].isSick) {
            sickPersons.push(persons[i])
        }
        console.log(sickPersons) // ne fonctionne pas
}



  // Difficulté supplémentaire, encapsuler la boucle dans une fonction et passer le tableau en paramètre

const persons_2 = [{
    name: "Pierre",
    hasCar: true,
    hasBike: true,
    isSick: true
}, {
    name: "Mélanie",
    hasCar: true,
    hasBike: false,
    isSick: false
}, {
    name: "Paul",
    hasCar: false,
    hasBike: true,
    isSick: true
}, {
    name: "Sophie",
    hasCar: false,
    hasBike: false,
    isSick: false
}, {
    name: "Paul",
    hasCar: false,
    hasBike: true,
    isSick: true
}, {
    name: "Nathalie",
    hasCar: false,
    hasBike: false,
    isSick: false
}, {
    name: "Laurence",
    hasCar: false,
    hasBike: true,
    isSick: true
}, {
    name: "Adèle",
    hasCar: false,
    hasBike: false,
    isSick: false
}, {
    name: "Stéphane",
    hasCar: false,
    hasBike: true,
    isSick: true
}, {
    name: "Théa",
    hasCar: false,
    hasBike: false,
    isSick: false
}, {
    name: "Paul",
    hasCar: false,
    hasBike: true,
    isSick: true
}, {
    name: "Léo",
    hasCar: false,
    hasBike: false,
    isSick: false
}, {
    name: "Romane",
    hasCar: false,
    hasBike: true,
    isSick: true
}, {
    name: "Max",
    hasCar: false,
    hasBike: false,
    isSick: false
}]

const result = findSickPeople(persons_2)
console.log(result);

function findSickPeople(arr) {
    let sickPersons = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isSick) {
            sickPersons.push(arr[i])
        }
    }

    return sickPersons;
}



