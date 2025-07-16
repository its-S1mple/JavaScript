function Animal(sound) {
  this.sound = sound;
}

Animal.prototype.makeSound = function() {
  console.log(this.sound);
}

function Dog() {
  Animal.call(this, 'Woof!');
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog();
dog.makeSound(); // Output: Woof!
/*In this example, the Animal function is a constructor function that takes one argument, sound. The Dog function is another constructor function that calls the Animal function with the argument 'Woof!'. We then set the Dog.prototype object to a new object that inherits from Animal.prototype, and set the constructor property to Dog. When we create a new Dog object and call the makeSound method, it logs 'Woof!' to the console. */

function Animal(sound) {
  this.sound = sound;
}

Animal.prototype.makeSound = function() {
  console.log(this.sound);
}

function Dog() {
  Animal.call(this, 'Woof!');
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

function Bulldog() {
  Dog.call(this);
}

Bulldog.prototype = Object.create(Dog.prototype);
Bulldog.prototype.constructor = Bulldog;

const bulldog = new Bulldog();
bulldog.makeSound(); // Output: Woof!


/*In this example, we have a three-level inheritance structure: Animal -> Dog -> Bulldog. The Bulldog constructor calls the Dog constructor, which in turn calls the Animal constructor. When we create a new Bulldog object and call the makeSound method, it logs 'Woof!' to the console, demonstrating that the Bulldog inherits from Dog and Dog inherits from Animal.*/