// Solution

function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,

}

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
}

function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

// Problem

// function Cat(name) {
//   this.name = name; 
// }

// Cat.prototype = {
//   constructor: Cat, 
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// function Bear(name) {
//   this.name = name; 
// }

// Bear.prototype = {
//   constructor: Bear, 
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
  
// };

// There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.