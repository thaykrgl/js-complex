// OBJECTS - Part II

// Javascriptte oluşturulan her nesne ana(kök) nesne olarak düşünebileceğimiz Object nesnesini prototype olarak alır. Inheritance kavramındaki hayvanlar -> memeliler -> insan durumu gibi düşünülebilir. İnsan nesnesinin prototypleri memeliler ve hayvanlardır. Memeliler nesnesinin prototype ı hayvanlardır.

const person = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName: function () {
    return this.name + " " + this.surname
  }
}
console.log(person); // Nesnenin kendisi
console.log(person.name); // John
console.log(person.fullName()); // John Doe

//console.log(person.fullName2()); // person nesnesi böyle bir propertye sahip olmadığı için hata alıyoruz.
//console.log(person.job); // person nesnesi böyle bir propertye sahip olmadığı için hata alıyoruz. 

console.log(person.toString()); // person nesnesi kendisi böyle bir propertye sahip olmasa bile prototype ı olan ana(kök) Object nesnesi bu propertye sahip olduğu için hata almıyoruz.

console.log(person.hasOwnProperty("name")); // person nesnesi kendisi böyle bir propertye sahip olmasa bile prototype ı olan ana(kök) Object nesnesi bu propertye sahip olduğu için hata almıyoruz.

// Object + name, surname, age, fullName() ----> person

const myObj = {};
console.log(myObj);
console.log(myObj.toString()); // myObj nesnesi kendisi böyle bir propertye sahip olmasa bile prototype ı olan ana(kök) Object nesnesi bu propertye sahip olduğu için hata almıyoruz.

// Object ---> myObj

function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.fullName = function () {
    return this.name + " " + this.surname
  }
}

const arin = new Person("Arin", "Çekiç", 6);
console.log(arin);

// Object + name, surname, age, fullName() ----> Person ----> arin

console.log(arin.toString());
console.log(arin.hasOwnProperty("age")); // true
console.log(arin.__proto__); // arin nesnesinin prototype ı Person constructorıdır. ana(kök) nesne olan Object te yine prototypeıdır.

const elis = new Person("Elis", "Çekiç", 4);
console.log(elis);
elis.job = "Child";
console.log(elis);
console.log(elis.toString());

// Object + name, surname, age, fullName() ----> Person + job ----> elis

elis.toString = function () {
  return "ELISSSSS";
} // prototypeın sahip olduğu fonksiyonları ezebiliriz.

console.log(elis.toString());

function Person2(name, age) {
  this.name = name;
  this.age = age;
}

Person2.prototype.fullName = function () {
  return this.name + " " + this.surname
}

Person2.prototype.surname = "Çekiç"; // arin2 ve elis2 de ortak olduğu için prototype de bir kere yazıyoruz.

// Oluşturacağımız nesnelerimizde ortak özellikler varsa bunları kurucu metotlarımızda değilde prototypede bir kere yazarak kurucu metotlarımızı sadeleştirebiliriz. (Yukarıda olduğu gibi)

const elis2 = new Person2("Elis", 4);
const arin2 = new Person2("Arin", 6);
console.log(elis2);
console.log(arin2);


const person2 = {
  name: 'XXXXXXXX',
  surname: 'XXXXXX',
  age: 0,
  fullName: function () {
    return this.name + " " + this.surname
  }
}

const arin3 = Object.create(person2);
console.log(arin3); // person2 nesnesi örnek alınarak oluşturulduğu için şu an person2 nesnesinin propertylerine ve o propertylere verilen değerlere sahip  
console.log(arin3.name); // XXXXXXXX

arin3.name = "Arin";

console.log(arin3); // {name: 'Arin'}

console.log(arin3.age); // 0

arin3.age = 6;

console.log(arin3.age); // 6

console.log(arin3); // {name: 'Arin', age: 6}

console.log(arin3.hasOwnProperty("age")); // true
console.log(arin3.hasOwnProperty("surname")); // false çünkü surname propertysi arin3 nesnesine person2 den geldi ve daha sonra arin3 nesnesi bu property için atama yapmadı. Şu an surname propertysinin değeri XXXXXX. Yani surname propertysi mevcut ancak arin3 nesnesinin prototypelerinde

console.log("surname" in arin3); // bu kullanımda arin3 nesnesinin prototypelarıda dahil surname propertysine sahip olup olmadığını sorgulamak için. true döndürür.