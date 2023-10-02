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
let difference = 0; // La difference entre l'âge qui sert de vérification avec le new Date().getTime();
let ageOfUser = 0; // Age de l'utilisateur
let citychecked = false; // Variable qui permet de vérifier si une ville a été selectionnée ou non
const regexNames = /^[A-Za-zÀ-ÖØ-öø-ÿ]+((\s)?((\'|\-|\.)?([A-Za-zÀ-ÖØ-öø-ÿ])+))*$/
const regexQuantity = /^\d+$/

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
  document.getElementById('btnSendModal').reset(); // Permet de réinitialiser le formulaire
  location.reload();//recharge la page quand le modal est fermé
}

//Fonctions de vérification des entrées du formulaire
function firstNameCheck()   {
  const firstNameT = firstNameInput.value;
  let fnameChecked = regexNames.test(firstNameT);
  if (fnameChecked == true && firstNameT.length >= 2) {
    firstNameErrorMess.textContent = ("");
    firstNameInput.style.border = "thick solid green";  // Ajoute une bordure rouge si faux, si vrai c'est vert
    return true;
  }
  else {
    firstNameErrorMess.style.color = "red";
    firstNameErrorMess.style.fontSize ="0.6em"
    firstNameErrorMess.textContent = (`Le champ "Prénom" renseigné n'est pas valide !`);
    firstNameInput.style.border = "thick solid red";
    return false;
  };
};
function lastNameCheck()   {
  const lastNameT = lastNameInput.value;
  let lnameChecked = regexNames.test(lastNameT);
  if (lnameChecked == true && lastNameT.length >= 2) {
    lastNameErrorMess.textContent = ("");
    lastNameInput.style.border = "thick solid green";
    return true;
  }
  else {
    lastNameErrorMess.style.color = "red";
    lastNameErrorMess.style.fontSize ="0.6em"
    lastNameErrorMess.textContent = (`Le champ "Nom" renseigné n'est pas valide !`);
    lastNameInput.style.border = "thick solid red";
    return false;
  };
};
function emailCheck()   {
  const emailT = emailInput.value;
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailT)) { 
    emailErrorMess.textContent = ("");
    emailInput.style.border = "thick solid green";
    return true;
  }
  else {
    emailErrorMess.style.color = "red";
    emailErrorMess.style.fontSize = "0.6em";
    emailErrorMess.textContent = (`Le champ "Email" renseigné n'est pas valide !`);
    emailInput.style.border = "thick solid red";
    return false;
  };
};
function birthDateCheck()   {
  const birthDateT = birthDateInput.value; // Sert à faire la véfication dans le Regex
  let birthDateInYearsInput = birthDateInput.valueAsDate;// La valeur de l'âge convertis en date similaire au new Date
  let birthDateFilled = birthDateInYearsInput !== null;// Verification que l'entrée de la date de naissance soit complète
  let verificationDateinYears = new Date().getTime();// Vérification de l'année avec un âge de référence
  
  
  if ((/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(birthDateT))){
    birthDateErrorMess.textContent = ("");
  }
  if(birthDateFilled){ // Si l'Input est correctement rempli, il va calculer la différence entre l'âge de différence et la valeur de l'Input
    difference = verificationDateinYears - birthDateInYearsInput.getTime();
    ageOfUser = difference / (1000 * 60 * 60 * 24 * 365.25);//Conversion de la différence en âge grâce à la Formule qui permet de déterminer le temps dans une année 
                                                            //(365 jours et 6 heures) en millisecondes
    ageOfUser = Math.round(ageOfUser);//Permet d'arrondir l'âge à une valeur entière
      
      if(ageOfUser >= 18){
        birthDateErrorMess.textContent = ("");
        birthDateInput.style.border = "thick solid green";
        return true
      }
      else if (ageOfUser < 18){
        birthDateErrorMess.style.color = "red";
        birthDateErrorMess.style.fontSize = "0.6em";
        birthDateErrorMess.textContent = (`Vous devez avoir plus de 18 ans pour vous inscrire.`);
        birthDateInput.style.border = "thick solid red";
        return false
      }
  }
  else {
    birthDateErrorMess.style.color = "red";
    birthDateErrorMess.style.fontSize = "0.6em";
    birthDateErrorMess.textContent = (`La date de naissance n'est pas valide !`);
    birthDateInput.style.border = "thick solid red";
    return false
  } 
  
}
function quantityTournamentCheck() {
  let quantityT = tournamentQuantityInput.value;
  let quantityChecked = regexQuantity.test(quantityT);
  if(quantityChecked ==  true && quantityT < 100 && quantityT >= 0){
    quantityErrorMsg.textContent = ("");
    tournamentQuantityInput.style.border = "thick solid green";
    return true
  }
  else {
    quantityErrorMsg.style.color = "red";
    quantityErrorMsg.style.fontSize = "0.6em";
    quantityErrorMsg.textContent = (`Ce champ doit contenir des nombres de 0 à 99 !`);
    tournamentQuantityInput.style.border = "thick solid red";
    return false
  }
}
function cityCheck() {
  for (let i = 0; i < baliseVille.length; i++) { //Permet de récupérer le bouton de la ville choisie
    if (baliseVille[i].checked) {
        ville = baliseVille[i].value
        villeErrorMsg.textContent = ("");
        citychecked = true;
        break
    }
    else {
      villeErrorMsg.style.color = "red";
      villeErrorMsg.style.fontSize = "0.6em";
      villeErrorMsg.textContent = (`Veuillez sélectionner une ville.`); 
      citychecked = false;
    }
  }
}
function cguChecking(){
  if (cguCheck.checked){
    cguErrorMsg.textContent = ("");
    return true
  }
  else{
    cguErrorMsg.style.color = "red";
    cguErrorMsg.style.fontSize = "0.6em";
    cguErrorMsg.textContent = (`Veuillez accepter les conditions d'utilisation.`);
    return false
  }
}
//Execution des entrées du formulaire
firstNameInput.addEventListener("input", (e) => {
  e.preventDefault();
  firstNameCheck();
});
lastNameInput.addEventListener("input", (e) => {
  e.preventDefault();
  lastNameCheck()
});
emailInput.addEventListener("input", (e) => {
  e.preventDefault();
  emailCheck();
});
birthDateInput.addEventListener("input", (e) => {
  e.preventDefault
  birthDateCheck();
});
tournamentQuantityInput.addEventListener ("input", (e) => {
  e.preventDefault();
  quantityTournamentCheck();
});
//A l'appuie du bouton "c'est parti", actionne la fonction validate
btnSendModal.addEventListener("submit", (e) => {
    e.preventDefault();
});// La fonction validate se trouve déjà sur le html. Donc pas besoin de l'appeler une deuxième fois ici.
  

//Fonction de validation

function validate(){
  // Execute toutes les fonctions à l'appui du bouton "c'est parti"
  firstNameCheck(); 
  lastNameCheck();
  emailCheck();
  birthDateCheck();
  quantityTournamentCheck();
  cityCheck();
  cguChecking();

  if(newsLetter.checked){  // Permet de déterminer si la newsLetter est cochée ou pas.
    newsLetterChecked = true
  }
  else{
    newsLetterChecked = false
  }
  //Si tout les champs sont correctemment remplis, le formulaire s'enregistre et passe au modal suivant
  if (firstNameCheck() == true && lastNameCheck() == true && emailCheck() == true && birthDateCheck() == true && quantityTournamentCheck() == true && citychecked == true && cguChecking() == true){ 
    
    
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
    console.log(JSON.parse(JSON.stringify(submit))); //Données récupérées
    
    
    confirmation.classList.add('confirm-modal');// Ajout de la classe "confirm-modal" pour la mise en page en CSS
    btnSendModal.style.display = "none";// Masquage du formulaire
    confirmation.style.display ="flex";// Affichage de la confirmation 
    document.getElementById('btnSendModal').reset(); // Permet de réinitialiser le formulaire
  } 
  //Sinon la validation s'interrompt
  else {
    return
  }
}
closeConfirm[0].addEventListener("click", closeModal);// Fonction de fermeture de la fenêtre (du bouton rouge "fermer")
    