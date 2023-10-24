// revision cours

// let words=[`salut`, `mon`,`ton`, `nom`, 'est', 'Pierre' ]
// let sentence = ``

// for(let n = 0; n < words.length; n++) {
//     // sentence += words[n] + ` ` ////+= signifie pour ajouter chaque élement du tableau = sentence = sentence + words[n]
//     if(n!=2) {
//         sentence += words[n] + ` `
//     }
// }
// console.log(sentence)

                                // // suite de l'exercice précédent: autre  méthode de résulat avec "continue"

//  let words=[`salut`, `mon`,`ton`, `nom`, 'est', 'Pierre' ]
// let sentence = ``

// for(let n = 0; n < words.length; n++) {
   
//     if(n==2) {
//         continue

//     }
//     sentence += words[n] + ` `
// }
// console.log(sentence)    



                                // // ajoute un point à la fin
//  let words=[`salut`, `mon`,`ton`, `nom`, 'est', 'Pierre' ]
// let sentence = ``

// for(let n = 0; n < words.length; n++) {
   
//     if(n==2) {
//         continue
//     }
//     sentence += words[n] 
//     if(n == words.length - 1 ) {
//         sentence += `.`
//     }
//     sentence += ` `
// }
// console.log(sentence) 

                                            // // autre exercice sur la base de récup de données  html

// const myTitle = document.querySelector(`.my-title`)

// // // recupération d'un texte : changement de texte par un autre
// // myTitle.textContent =`Hello New World`

// // un clic sur la class container clic et on bascule sur hello new world
// // puis on rebascule sur le h1 d'avant
// myTitle.addEventListener('click', onTitleClick)

// function onTitleClick() {
//     if(myTitle.textContent == `Hello world4 !`){
//         myTitle.textContent =`Hello New World`
//     } else {
//         myTitle.textContent = `Hello world4 !`
//     }    
// }

// // //  modification de la nature du text ... fontSize, color, backgroundColor ...

const myTitle = document.querySelector(`.my-title`)


myTitle.addEventListener('click', onTitleClick)

function onTitleClick() {
    if(myTitle.textContent == `Hello world4 !`){
        myTitle.textContent =`Hello New World`
        myTitle.style.backgroundColor = "black"
        myTitle.style.color = "white"
    } else {
        myTitle.textContent = `Hello world4 !`
        myTitle.style.backgroundColor = "white"
        myTitle.style.color = "black"
    }    
}
                        // //truc de fou: modification des couleurs à chaque "clic"

myTitle.addEventListener('click', onTitleClick)

let setsOfColors = [
    {
        bgColor: 'black',
        textColor: 'white'
    },
    {
        bgColor: 'white',
        textColor: 'black'
    },
    {
        bgColor: 'yellow',
        textColor: 'purple'
    },
    {
        bgColor: 'green',
        textColor: 'red'
    }
]

let colorIndex = 0

function onTitleClick() {
    myTitle.textContent = "Hello new World !"
    // if (myTitle.style.color == "black") {
    //     myTitle.style.backgroundColor = "black"
    //     myTitle.style.color = "white"
    // } else {
    //     myTitle.style.backgroundColor = "white"
    //     myTitle.style.color = "black"
    // }
    myTitle.style.backgroundColor = setsOfColors[colorIndex].bgColor
    myTitle.style.color = setsOfColors[colorIndex].textColor

    colorIndex++
    if (colorIndex == setsOfColors.length) {
        colorIndex = 0
    }
}






