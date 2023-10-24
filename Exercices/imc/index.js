// 1 On récupère la balise html et on la stocke dans une variable en js
const validationBtn = document.querySelector(".validation-btn")
const resultIMC = document.querySelector('.bmi-value')
const inputs = document.querySelectorAll('.bmi-input')
const comment = document.querySelector(`.comment`)

// 2 on déclare un click sur le bouton, à chaque fois qu'on clique, on exécute la fonction associéee
validationBtn.addEventListener('click', onBtnClick)

function onBtnClick() {
    const height = inputs[0].value / 100
    const weight = inputs[1].value
    // afficher dans la console l'IMC => poids en kg / taille en m ² ** 2

   // vérifier les données utilisateur, pas de valeurs <= 0
   if (!weight || weight < 0) {
    handleError('heightError')
    return
    }
    if (!height || height < 0) {
    handleError('weightError')
    return
    }
const bmi = Math.round((weight / height ** 2) * 100) /100
resultIMC.textContent = bmi

}

function handleError(typeError) {
// Implémenter la condition pour préciser le message d'erreur en fonction de la taille ou du poids
if(typeError== 'heightError') {
    comment.textContent = "La valeur saisie dans le champ taille est incorrecte"
}
if (typeError == 'weightError') {
    comment.textContent = "La valeur saisie dans le champ poids est incorrecte"    
}
}
 
//// autre facon d'y arriver

