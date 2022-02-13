// OBJECTS - Part I

const person = {
  name: "John",
  surname: "Doe",
  age: 40,
  languages: ["Turkish", "English", "Spanish"],
  fullName: function () {
    return this.name + " " + this.surname
  },
  address: {
    city: "Balıkesir",
    district: "Akçay"
  }
}

// name, surname, age, languages, fullName, address person nesnesinin propertyleridir. fullName aynı zamanda bu nesnenin methodudur.

// Object Literal 

const person2 = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName: function () {
    return this.name + " " + this.surname
  }
}
console.log(person2);

// Dot Notation
console.log(person2.name);
console.log(person2.age);
console.log(person2.fullName());
person2.job = "Student";
console.log(person2);
console.log(person2.job);

// Bracket Notation
console.log(person2['name']);
console.log(person2['age']);
console.log(person2['fullName']());
console.log(person2['na' + 'me']) // 'na' + 'me' ---> 'name'


// CONSTRUCTOR ---> YAPICI

function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.fullName = function () {
    return this.name + " " + this.surname
  }
}


const person3 = new Person("John", "Doe", 40);
const person4 = new Person("Taha", "Aykıroğlu", 38);

console.log(person3)
console.log(person3.fullName());

console.log(person4)
console.log(person4.fullName());


// Object Constructor

const person5 = new Object();
person5.name = 'John';
person5.surname = 'Doe';
person5.age = 40;
person5.fullName = function () {
  return this.name + " " + this.surname;
}
console.log(person5);
console.log(person5.age);
console.log(person5.fullName());

// Object.create() ile Nesne Olusturmak --> başka bir nesne kullanılarak yapılır. Inheritance ilişkisine benzer bir ilişki

const person6 = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName: function () {
    return this.name + " " + this.surname
  }
}

console.log(person6);
const arin = Object.create(person6); // person6 nesnesinin propertylerine sahip arin adında bir nesne oluşturuldu.
arin.name = 'Arin';
arin.surname = 'Software';
arin.age = 5;
console.log(arin);
console.log(arin.fullName());