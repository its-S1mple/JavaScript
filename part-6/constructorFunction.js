function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

const person = new Person('manish kumar', 24);
person.sayHello(); // Output: Hello, my name is John Doe and I am 30 years old.