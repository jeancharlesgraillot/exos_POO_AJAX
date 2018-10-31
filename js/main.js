// Exercice 1

// Partie 1

var user = {
  firstname : "Jean-Charles",
  lastname : "Graillot",
  country : "france",
  age : 37,
  registredPayments : ["mastercard", "visa"],
  getFirstname : function(){
    alert(user.firstname);
  },
  getLastname : function(){
    alert(user.lastname);
  },
  getBirthdate : function(){
    alert(2018 - user.age);
  },

}

user.getNameAndBirthdate = function () {
    return user.getFirstname() + user.getLastname() + user.getBirthdate();
};

user.getNameAndBirthdate();

// Partie 2

var authorisations = {
  authorisedCountries : ["italie", "espagne", "allemagne", "angleterre", "france"],
  authorisedPayments : ["mastercard", "american express", "visa", "paypal"],
  limitAge : 18,
  checkAge : function(){
    if (user.age < 18) {
      console.log("tu es trop jeune ! Ce contenu est réservé aux personnes de plus de 18 ans");
    }else{
      console.log("Vous avez l'âge requis !");
    };
  },

  checkCountry : function(){

  switch (user.country) {
  case "italie":
      console.log("L'Italie' fait partie des pays admissibles !");
      break;
  case "espagne":
      console.log("L'Espagne fait partie des pays admissibles !");
      break;
  case "allemagne":
      console.log("L'Allemagne fait partie des pays admissibles !");
      break;
  case "angleterre":
      console.log("L'Angleterre fait partie des pays admissibles !");
      break;
  case "france":
      console.log("La France fait partie des pays admissibles !");
      break;
  default:
      console.log("Votre pays ne fait pas partie de ceux admissibles !");
  }

  //   for (var i = 0; i < this.authorisedCountries.length; i++) {
  //     if (user.country == this.authorisedCountries[i]) {
  //       console.log("Vous faites partie des pays admissibles !");
  //     }else{
  //       console.log("Votre pays ne fait pas partie de ceux admissibles !");
  //     }
  //   }

},

  checkPayments : function(){
    console.log("Les moyens de paiement utilisables sont :");

    for (var i = 0; i < this.authorisedPayments.length; i++) {
      console.log(this.authorisedPayments[i]);
    }

    for (var i = 0; i < user.registredPayments.length; i++) {
      switch (user.registredPayments[i]) {
      case "mastercard":
          console.log("Votre moyen de paiement " + user.registredPayments[i] + " est utilisable !");
          break;
      case "american express":
          console.log("Votre moyen de paiement " + user.registredPayments[i] + " est utilisable !");
          break;
      case "visa":
          console.log("Votre moyen de paiement " + user.registredPayments[i] + " est utilisable !");
          break;
      case "paypal":
          console.log("Votre moyen de paiement " + user.registredPayments[i] + " est utilisable !");
          break;
      default:
          console.log("Votre moyen de paiement n'est pas autorisé !");
      }
    }
  }
}

authorisations.checkAge();
authorisations.checkCountry();
authorisations.checkPayments();

// Exercice 2

function Warrior (name, attack, life) {
  this.name = name;
  this.attack = attack;
  this.life = life;

}

// Une méthode combat qui permet de réduire la vie de la cible selon la valeur de l'attaque du
// combattant.
