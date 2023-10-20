                                        // REVISIONS
                                    // Révision1

// let arrExample = [2, 10, 5, 89, 58, 9, 25, 56, 118]

// let readFirstElement = true;

// let index;

// if (readFirstElement) {
//     index = 2
// } else {
//     index = 4
// }

// console.log (arrExample[2])


//                                     // Révision2

// let objExample = {
//     prop1: 6,
//     prop2: 3,
// }


// console.log (objExample.prop1)

//                                     // Révision 3: exercice qui débouche sur un cours d'imbrication de tableaux et d'objets

// // A l'aide de l'objet précéedent, construire
// // la chaine de caractère ==> Je m'appelle Paul Doazan, j'ai 35 ans et j'habite à Talence.

// let identity1 = {
//     firstname1:'Paul',
//     lastname1: 'Doazen',
//     age1: 35,
//     town1:'Talence'
// }
// let resultFromObject = `Je m'appelle ${identity1.firstname1} ${identity1.lastname1} , j'ai ${identity1.age1}  et j'habite ${identity1.town1}`
// console.log (resultFromObject)

// // Pour ceux qui ont terminé, créer un deuxième objet identity2, 
// // stocker identity et identity 2 dans un tableau, 
// // et écrire la phrse précédente en utilisant le tabaleau.

// let identity2 = {
//     firstname2:'Régis',
//     lastname2: 'Jouan',
//     age2: 54,
//     town2:'Bisca'
// }

// let arrIdentities = [identity1, identity2]


// console.log(arrIdentities[0].firstname1)

//                                                         // Cours 2 sur .length
// // recupére le dernier éléments du tableau
// console.log(arrExample[arrExample.length - 1])


                                                // Exercice d'application qui permet de chercher la valeur du milieu d'un tableau
//  Récupérer l'élement du tableau placé au milieu du tableau à l'ai de la propriété .length du tableau


let arrExample = [3, 5, 8, 12, 2, 43, 21, 2, 3, 42, 2, 5, 12, 555, 2, 43, 21, 2, 42, 2, 5, 12, 434]

// let middleIndex;

// if(arrExample.length % 2 == 0) {
//     middleIndex = arrExample.length / 2
// } else {
//     middleIndex = (arrExample.length - 1) /2
// }

// let elementInTheMiddle = arrExample[middleIndex]


// console.log(elementInTheMiddle)

                                                //  autre possibilité pour l'exercice précedent

let middleIndex = Math.round(arrExample.lengh / 2); // et voilà ... rien besoin d'autre

console.log(elementInTheMiddle)





