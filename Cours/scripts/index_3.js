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

const person_1 = {
    name: `Pierre`,
    hasCar: true,
    hasBike: true,
    isSick: true
}

const person_2 = {
    name: `Melanie`,
    hasCar: true,
    hasBike: false,
    isSick: false
}

const person_3 = {
    name: `Paul`,
    hasCar: false,
    hasBike: true,
    isSick: true
}
const person_4 = {
    name: `Sophie`,
    hasCar: true,
    hasBike: false,
    isSick: false
}

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

canGoToUniversity(person_1)
canGoToUniversity(person_2)
canGoToUniversity(person_3)
canGoTopOfMountain(person_4)


function canGoToUniversity(person) {
    if (person.hasCar || person.hasBike) {                      // le || signifie "or"
        console.log(`${person.name} peut aller à l'université`)
    } else {
        console.log(`${person.name} ne peut pas aller à l'université`)
    }

}

function canGoTopOfMountain(person) {
    if(person.hasCar && person.hasBiken && !person.isSick){                    // opérateur de comparaison complexe : "and" // le &&! signifie ne doit pas
        console.log(`${person.name} ne peut aller au sommet à la montagne`)   
    } else {

    }
    console.log(`${person.name} ne peut aller au sommet à la montagne`)   
}
