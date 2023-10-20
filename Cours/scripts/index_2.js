                                        // REVISIONS
                                    // Révision1

let arrExample = [2, 10, 5, 89]

let readFirstElement = true;

let index;

if (readFirstElement) {
    index = 2
} else {
    index = 4
}

console.log (arrExample[2])


                                    // Révision2

let objExample = {
    prop1: 6,
    prop2: 3,
}


console.log (objExample.prop1)

                                    // Révision 3: exercice qui débouche sur un cours d'imbrication de tableaux et d'objets

// A l'aide de l'objet précéedent, construire
// la chaine de caractère ==> Je m'appelle Paul Doazan, j'ai 35 ans et j'habite à Talence.

let identity1 = {
    firstname1:'Paul',
    lastname1: 'Doazen',
    age1: 35,
    town1:'Talence'
}
let resultFromObject = `Je m'appelle ${identity1.firstname1} ${identity1.lastname1} , j'ai ${identity1.age1}  et j'habite ${identity1.town1}`
console.log (resultFromObject)

// Pour ceux qui ont terminé, créer un deuxième objet identity2, 
// stocker identity et identity 2 dans un tableau, 
// et écrire la phrse précédente en utilisant le tabaleau.

let identity2 = {
    firstname2:'Régis',
    lastname2: 'Jouan',
    age2: 54,
    town2:'Bisca'
}

let arrIdentities = [identity1, identity2]


console.log(arrIdentities[0].firstname1)











