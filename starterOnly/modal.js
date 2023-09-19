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
btnSendModal.addEventListener("submit", (e) => { //A l'appuie du bouton "c'est parti", actionne la fonction validate
    e.preventDefault();
    validate()
});
  

//Fonction de validation

function validate(){
  for (let i = 0; i < baliseVille.length; i++) { //Permet de récupérer le bouton de la ville choisie
    if (baliseVille[i].checked) {
        ville = baliseVille[i].value
        break
    }
  }
  
  if(newsLetter.checked){  // Permet de déterminer si la newsLetter est coché ou pas.
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

closeConfirm[0].addEventListener("click", closeModal);// Fonction de fermeture de la fenêtre (du bouton rouge "fermer" )
    


