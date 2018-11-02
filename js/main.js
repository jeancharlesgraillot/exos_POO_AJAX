// Exercice 1

// Partie 1

// var user = {
//   firstname : "Jean-Charles",
//   lastname : "Graillot",
//   country : "france",
//   age : 37,
//   registredPayments : ["mastercard", "visa"],
//   getFirstname : function(){
//     alert(user.firstname);
//   },
//   getLastname : function(){
//     alert(user.lastname);
//   },
//   getBirthdate : function(){
//     alert(2018 - user.age);
//   },
//
// }
//
// user.getNameAndBirthdate = function () {
//     return user.getFirstname() + user.getLastname() + user.getBirthdate();
// };
//
// user.getNameAndBirthdate();

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

    // for (var i = 0; i < this.authorisedCountries.length; i++) {
    //   if (user.country == this.authorisedCountries[i]) {
    //     console.log("Vous faites partie des pays admissibles !");
    //   }else{
    //     console.log("Votre pays ne fait pas partie de ceux admissibles !");
    //   }
    // }
  },
//
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
//
// authorisations.checkAge();
// authorisations.checkCountry();
// authorisations.checkPayments();

// Exercice 2

function Warrior (name, force, life) {
  this.name = name;
  this.force = force;
  this.life = life;
  this.describe = function () {
    var description = this.name + " a " + this.life + " points de vie, " +
        this.force + " en force";
    return description;
  };
  this.attack = function (target) {
    if (this.life > 0) {
        var damages = this.force;
        console.log(this.name + " attaque " + target.name + " et lui fait " + damages + " points de dégâts");
        target.life -= damages;
        if (target.life > 0) {
            console.log(target.name + " a encore " + target.life + " points de vie");
        } else {
            target.life = 0;
            console.log(target.name + " est mort !");
        }
    } else {
        console.log(this.name + " ne peut pas attaquer : il est mort...");
    }
  }
}


// • D'une méthode de soin qui consomme 20 de magie mais rajoute 10 de vie au magicien
// (attention si la magie est inférieure à 20, la méthode ne doit pas pouvoir être lancée)

function Wizard (name, force, magic, life) {
  this.name = name;
  this.force = force;
  this.magic = magic;
  this.life = life;
  this.describe = function () {
    var description = this.name + " a " + this.life + " points de vie, " +
        this.force + " en force et " + this.magic + " en magie";
    return description;
  };
  this.attack = function (target) {
    if (this.life > 0) {
        var damages = this.force;
        console.log(this.name + " attaque " + target.name + " et lui fait " + damages + " points de dégâts");
        target.life -= damages;
        if (target.life > 0) {
            console.log(target.name + " a encore " + target.life + " points de vie");
        } else {
            target.life = 0;
            console.log(target.name + " est mort !");
        }
    } else {
        console.log(this.name + " ne peut pas attaquer : il est mort...");
    }
  }
  this.heal = function(){
    if (this.magic >= 20) {
      var healValue = 10;
      console.log(this.name + " se soigne et gagne " + healValue + " points de vie");
      this.life += healValue;
      this.magic -= 20;
      console.log(this.name + " a désormais " + this.life + " points de vie et " + this.magic + " en magie");
    }else{
      console.log(this.name + " n'a pas assez de magie pour se soigner");
    }
  }
}

var obiOne = new Warrior("Obi One", 20, 500);
var darkSidius = new Warrior("Dark Sidius", 30, 400);

var gandalf = new Wizard("Gandalf", 40, 100, 300);

// console.log(gandalf.describe());
// console.log(gandalf.heal());

console.log(darkSidius.attack(gandalf));
console.log(obiOne.attack(gandalf));
console.log(gandalf.heal());
console.log(gandalf.attack(darkSidius));

// for (var i = 0; i < 40; i++) {
//   if ((obiOne.life > 0) && (darkSidius.life > 0)) {
//     if (i % 2 == 0) {
//       console.log(darkSidius.attack(obiOne));
//     }else{
//       console.log(obiOne.attack(darkSidius));
//     }
//   }else{
//     break;
//   }
// }
