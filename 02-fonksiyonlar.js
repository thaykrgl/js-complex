// FONKSIYONLAR

// Function Declaration / Statement

console.log(square(5));

function square(num) { // Parametre
  return (num * num);
}

square(5) // Arguman 

console.log(square(5)); // 25 () ---> Invoke 

// Function Declaration yöntemiyle tanımlanan fonksiyon tanımlandığı yerden daha önce kullanılabiliyor. Yani var ile değişken tanımlamada olduğu gibi hoisting özelliğine sahip.


// Function Expression

const square2 = function (num) {
  return (num * num);
}

// Function Expression yöntemiyle tanımlanan fonksiyonda fonksiyona isim vermek zorunda değiliz. İsim vermeden de tanımlanabilir. Bu yöntemle tanımlanan fonksiyonlar First-Class Function özelliği kazanmış olurlar. Yani diğer bütün değişkenlere davrandığımız gibi davranabiliriz. Hoisting özelliğine sahip değildirler.

console.log(square2); // fonksiyonun kendisini verir. 
console.log(square2(5)); // 25

// FIRST - CLASS FUNCTIONS

const myArr = [6, "Arin", function () { console.log("Array Element"); }]
myArr[2](); // Array Element

const myObj = {
  age: 5,
  name: "Arin",
  func: function () { console.log("Object Element"); }
};

myObj.func(); // Object Element
console.log(20 + (function () { return 10; })()) // 30

// Function Expression yöntemiyle tanımlanan fonksiyon başka bir fonksiyona argüman ve parametre olarak gönderilebilir. 

const addFive = function (num, func) {
  console.log(num + func());
}
addFive(10, function () { return 5; }) // 15

const myFunc = function (num) {
  return function toDouble() {
    console.log(num * 2);
  }
}

myFunc(7)(); // 14

const result = myFunc(7);
result(); // 14

// IIFE
// Immediately Invocable Function Expression

(function () {
  console.log(5 + 12);
})();

// Sona koymuş olduğumuz parantezler fonksiyonun tanımlandığı gibi invoke olması için. Başa ve sona(invoke parantezlerinden önce) birer tane parantez koymadığımız takdirde Javascript motoru fonksiyonu Function Declaration yöntemiyle tanımlamaya çalıştığımızı düşünüyor. Bundan kaçınmak için başa ve sona(invoke parantezlerinden önce) birer tane parantez koyuyoruz.

function square(num1, num2) {
  return (num1 * num2);
}

console.log(square.length);

// 70-74 arası --> Fonksiyonlarda object tipindedir. Propertyleri vardır. 