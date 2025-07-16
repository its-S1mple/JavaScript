

let car ={
    brand: "ford",
    model: "mustang",
    year: "2023" ,

    start: function() {
       return `the ${this.brand} ${this.model} is starting.`;
    },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}   

let person1 = new Person("manish", 24);
let person2 = new Person("john", 30);

// console.log(person1); // Output: manish
// console.log(person2); // Output: 30

function Animal(type){
    this.type = type
}

Animal.prototype.sound = function (){
    return `${this.type} makes a sound`
}

let cat = new Animal("cat");

// console.log(dog.sound()); // Output: dog makes a sound

//classes in OOPS


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const personA = new Person('John Doe', 30);
personA.sayHello(); // Output: Hello, my name is John Doe and I am 30 years old.


//class with inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log('The animal makes a sound.');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  sound() {
    console.log('The dog barks.');
  }
}

const dog = new Dog('Max', 'Golden Retriever');
dog.sound(); // Output: The dog barks.

//class with static mehtods

class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(MathHelper.add(2, 3)); // Output: 5
console.log(MathHelper.subtract(5, 2)); // Output: 3

//classes with private fields 

class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500


//classes with getters and setters

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value >= 0) {
      this._age = value;
    } else {
      throw new Error('Age must be a non-negative number.');
    }
  }
}

const person = new Person('John Doe', 30);
console.log(person.name); // Output: John Doe
person.name = 'Jane Doe';
console.log(person.name); // Output: Jane Doe