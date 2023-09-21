function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close"); //Bouton "X" pour fermer le modal
const confirmation = document.getElementById("confirmation");//Modal de confirmation

//Elements du formulaire

const firstNameInput = document.getElementById("first"); //Prénom
const lastNameInput = document.getElementById("last"); //Nom
const emailInput = document.getElementById("email"); //Email
const birthDateInput = document.getElementById("birthdate"); //Anniversaire
const tournamentQuantityInput = document.getElementById("quantity"); //Quantité de tournoi participés
let baliseVille = document.querySelectorAll('input[name="location"]');  //Selecteur de la ville du formulaire
let ville = ""; //variable pour le selecteur de la ville
let cguCheck = document.getElementById("checkbox1"); //Conditions d'utilisations
const newsLetter = document.getElementById("checkbox2"); //2e checkbox facultative
let newsLetterChecked = newsLetter.checked;  //Variable pour savoir si la 2e checkbox est activée ou non
const btnSendModal = document.getElementById("btnSendModal"); //Bouton de validation du formulaire
const closeConfirm = document.getElementsByClassName('btn-close');//Bouton du modal de confirmation (du bouton rouge "fermer" )

//Messages d'erreurs du formulaire

let firstNameErrorMess = document.getElementById('firstNameErrorMsg');
let lastNameErrorMess = document.getElementById('lastNameErrorMsg');
let emailErrorMess = document.getElementById('emailErrorMsg');
let birthDateErrorMess = document.getElementById('birthDateErrorMsg');
let quantityErrorMsg = document.getElementById('quantityErrorMsg');
let villeErrorMsg = document.getElementById('villeErrorMsg');
let cguErrorMsg = document.getElementById('cguErrorMsg');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal form
function closeModal() {
  modalbg.style.display = "none";
  location.reload();//recharge la page quand le modal est fermé
}

//Fonctions de vérification des entrées du formulaire
function firstNameCheck()   {
  const firstNameT = firstNameInput.value;
  if (/^[A-Za-zÀ-ÖØ-öø-ÿ]+((\s)?((\'|\-|\.)?([A-Za-zÀ-ÖØ-öø-ÿ])+))*$/.test(firstNameT)) {
    firstNameErrorMess.textContent = ("");
    return true;
  }
  else {
    firstNameErrorMess.style.color = "red";
    firstNameErrorMess.style.fontSize ="0.6em"
    firstNameErrorMess.textContent = (`Le champs "Prénom" renseigné n'est pas valide !`);
    return false;
  };
};
function lastNameCheck()   {
  const lastNameT = lastNameInput.value;
  if (/^[A-Za-zÀ-ÖØ-öø-ÿ]+((\s)?((\'|\-|\.)?([A-Za-zÀ-ÖØ-öø-ÿ])+))*$/.test(lastNameT)) {
    lastNameErrorMess.textContent = ("");
    return true;
  }
  else {
    lastNameErrorMess.style.color = "red";
    lastNameErrorMess.style.fontSize ="0.6em"
    lastNameErrorMess.textContent = (`Le champs "Nom" renseigné n'est pas valide !`);
    return false;
  };
};
function emailCheck()   {
  const emailT = emailInput.value;
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailT)) { 
    emailErrorMess.textContent = ("");
    return true;
  }
  else {
    emailErrorMess.style.color = "red";
    emailErrorMess.style.fontSize = "0.6em";
    emailErrorMess.textContent = (`Le champs "Email" renseigné n'est pas valide !`);
    return false;
  };
};
function birthDateCheck()   {
  const birthDateT = birthDateInput.value;
  if ((/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(birthDateT))){
    birthDateErrorMess.textContent = ("");
    return true
  }
  else {
    birthDateErrorMess.style.color = "red";
    birthDateErrorMess.style.fontSize = "0.6em";
    birthDateErrorMess.textContent = (`La date de naissance n'est pas valide !`);
    return false
  }
}
function quantityTournamentCheck() {
  const quantityT = tournamentQuantityInput.value;
  if(/^\d+$/.test(quantityT)){
    quantityErrorMsg.textContent = ("");
    return true
  }
  else {
    quantityErrorMsg.style.color = "red";
    quantityErrorMsg.style.fontSize = "0.6em";
    quantityErrorMsg.textContent = (`Ce champs n'accepte que des nombres de 0 à 99 !`);
    return false
  }
}
//Execution des entrées du formulaire
firstNameInput.addEventListener("input", (e) => {
  e.preventDefault();
  firstNameCheck();
})
lastNameInput.addEventListener("input", (e) => {
  e.preventDefault();
  lastNameCheck()
})
emailInput.addEventListener("input", (e) => {
  e.preventDefault();
  emailCheck();
})
birthDateInput.addEventListener("input", (e) => {
  e.preventDefault
  birthDateCheck();
})
tournamentQuantityInput.addEventListener ("input", (e) => {
  e.preventDefault();
  quantityTournamentCheck();
})
//A l'appuie du bouton "c'est parti", actionne la fonction validate
btnSendModal.addEventListener("submit", (e) => {
    e.preventDefault();
});
  

//Fonction de validation

function validate(){
  if (firstNameCheck() === false){ //Si le prénom n'est pas correctement inscrit, ça empêche la validation de se faire
    return
  }
  if (lastNameCheck() === false){ //Si le nom n'est pas correctement inscrit, ça empêche la validation de se faire
    return
  }
  if (emailCheck() === false){  //Si l'email n'est pas correctement inscrit, ça empêche la validation de se faire
    return
  }
  if (birthDateCheck() === false){  //Si la date de naissance n'est pas correctement inscrite, ça empêche la validation de se faire
    return
  }
  if (quantityTournamentCheck() === false){  //Si la quantité de tournois n'est pas correctement inscrit, ça empêche la validation de se faire
    quantityErrorMsg.textContent = (`Ce champs n'est pas rempli !`);
    return
  }
  for (let i = 0; i < baliseVille.length; i++) { //Permet de récupérer le bouton de la ville choisie
    if (baliseVille[i].checked) {
        ville = baliseVille[i].value
        break
    }
  }
  if(ville == 0){ //Si aucune ville n'est séléctionnée, alors ça affiche un message d'erreur
    villeErrorMsg.style.color = "red";
    villeErrorMsg.style.fontSize = "0.6em";
    villeErrorMsg.textContent = (`Veuillez sélectionner une ville.`);
    return
  }
  else {
    villeErrorMsg.textContent = ("");
  }
  if(cguCheck.checked){ //Si les conditions d'utilisations ne sont pas acceptées, alors ça affiche un message d'erreur// Le .checked est une propriété qui permet de verifier si une checkbox est coché 
    villeErrorMsg.textContent = ("");
  }
  else {
    cguErrorMsg.style.color = "red";
    cguErrorMsg.style.fontSize = "0.6em";
    cguErrorMsg.textContent = (`Veuillez accepter les conditions d'utilisation.`);
    return
  }
  if(newsLetter.checked){  // Permet de déterminer si la newsLetter est cochée ou pas.
    newsLetterChecked = true
  }
  else{
    newsLetterChecked = false
    
  }


//Enregistrement des donnés du formulaire

  const submit = {
    contact: {
    
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      birthDate: birthDateInput.value,
      quantity: tournamentQuantityInput.value,
      city: ville,
      newsLetterBtn: newsLetterChecked,
    }

  }
  console.log(submit) //Données récupérées
  
  
  confirmation.classList.add('confirm-modal');// Ajout de la classe "confirm-modal" pour la mise en page en CSS
  btnSendModal.style.display = "none";// Masquage du formulaire
  confirmation.style.display ="flex";// Affichage de la confirmation 
}

closeConfirm[0].addEventListener("click", closeModal);// Fonction de fermeture de la fenêtre (du bouton rouge "fermer")
    