// Exercice 1

var user = {
  firstname : "Jean-Charles",
  lastname : "Graillot",
  country : "France",
  age : 37,
  payments : ["mastercard", "american express", "visa", "paypal"],
  getFirstname : function(){
    alert(this.firstname);
  },
  getLastname : function(){
    alert(this.lastname);
  },
  getBirthdate : function(){
    alert(2018 - this.age);
  },

}

user.getNameAndBirthdate = function () {
    return this.getFirstname() + this.getLastname() + this.getBirthdate();
};

user.getNameAndBirthdate();
