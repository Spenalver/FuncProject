function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  /* Write an ES2015 Version */

  function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}
//es2015 version
instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42
const instructor = { 
    firstName: "colt"
[favoriteNumber] = "that is may favorite!"}


var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName //" + "says bye!";
    }
  }

  const instructor = {
    firstName: "Colt",
    sayHi(){
        return "HI"
    }
    Bye(){
        return this.firstName + " says bye!";}
  }

  const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"



//es2015
const D = createAnimal("dog", "bark", "Woooof!")
/
d.bark()  

const S = createAnimal("sheep", "bleet", "BAAAAaaaa")

s.bleet() 

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}
