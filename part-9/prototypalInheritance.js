// prototypalInheritance.js

// Parent object
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

// Child object inherits from animal
const rabbit = Object.create(animal);
rabbit.hops = true;

// Using inherited properties
console.log(rabbit.eats); // true (inherited from animal)
rabbit.walk();            // "Animal walks" (inherited from animal)
console.log(rabbit.hops); // true (own property)

