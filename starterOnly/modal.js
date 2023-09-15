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
const modalbg2 = document.querySelector(".bground2"); //2e modal créé pour la confirmation d'inscription
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close"); //Bouton "X" pour fermer le modal

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
const btnSendModal = document.querySelectorAll(".btn-submit"); //Bouton de validation du formulaire

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal)); //Action qui ferme le modal 


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal form
function closeModal() { //fonction associée a la fermeture du modal
  modalbg.style.display = "none";
}


// Tentative de faire en sorte que la page se rafraichisse pas quand on appuie sur le bouton "C'est parti"

if(modalbg.style.display === "block"){ //Code permettant d'empêcher une erreur "Uncaught TypeError: Cannot read properties of undefined (reading ('preventDefault')";
//la condition if permet de faire comprendre au site qu'il doit exécuter ce code quand le modal est affiché (la fenetre du formulaire).
  btnSendModal.forEach((btn) => btn.addEventListener("submit", (submitModal())));// Différentes manières de faire actionner le bouton
  //btnSendModal.addEventListener("submit", submitModal());
  
  function submitModal(event){
    event.preventDefault(); // Devrait empêcher de faire rafraichir la page mais la verification fonctionne pour tout sauf la date de naissance.
    console.log("test"); //Test pour savoir si la page ne se rafraichit pas pour pouvoir enregistrer le contenu du formulaire
  }
};

//Fonction pour récupérer les infos du formulaire, inutilisée car tant que la page se rafraichit, ne peut servir à rien

/*function submitModal(event){
  event.preventDefault();
  for (let i = 0; i < baliseVille.length; i++) { //Permet de récupérer le bouton de la ville choisie
    if (baliseVille[i].checked) {
        ville = baliseVille[i].value
        break
    }
}
console.log(ville) // affiche la valeur du radio coché


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
  
  modalbg.style.display = "none";
  modalbg2.style.display = "block"; //Une fois le bouton "C'est parti" appuyé, ferme le premier modal et ouvre le 2e modal confirmant l'inscription
  
  
}*/