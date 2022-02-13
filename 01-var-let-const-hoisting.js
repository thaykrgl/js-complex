// VAR - LET - CONST

let age;
console.log(age); // undefined
age = 42;
console.log(age); // 42
const name = "Arin";
console.log(name); // Arin

// name = "Elis"; // const değişkene tanımlandıktan sonra atama yapılamaz


const myArr = [1, 2, 3];
console.log(myArr); // [1,2,3]
myArr.pop();
console.log(myArr); // [1,2]
// const değişkene atanan arrayimiz var. Bu arrayin içeriği değişebilir ama referansı değişemez.

const student = {
  name: "Arin",
  age: 5
}
console.log(student); // {name: 'Arin', age:5}

Object.freeze(student); // const değişkene atanan objectimiz var. Bu objectin içeriğinin değişmesini istemiyorsak Object.freeze kullanabiliriz.

student.name = "Elis";
console.log(student); // {name: 'Arin', age:5}

// student = {
//   name: "Elis",
//   age: 5
// } 
// const değişkene tanımlandıktan sonra atama yapılamaz. (30-33.satırlar)


// VAR --> global scope / functional scope 

var x = 1;
console.log(x); // 1
if (x === 1) {
  var x = 10;
  console.log(x) // 10
}
console.log(x) // 10

// LET --> block scope

let y = 1;
console.log(y); // 1
if (y === 1) {
  let y = 10;
  console.log(y) // 10
}
console.log(y) // 1

// HOISTING

var a;
console.log(a); // undefined

var a = 10;
console.log(a); // 10

console.log(b); // undefined 
//Aslında böyle olmamalı diye düşünürüz. Çünkü kodlar yukarıdan aşağıya doğru okunur. Ancak javascript Hoisting yaparak öncelikle bütün değişkenlerin içeriği hariç kendilerini yukarı taşır. Yani 65.satırda aslında javascript b değişkeninin var olduğunu biliyor ancak değerini bilmiyor. 
var b;

console.log(c); // undefined
var c = 10;

// Hoisting let ve const için geçerli değildir.
