// JS Single Thread
// JS Synchronous


// ÖRNEK 1
// const func1 = () => {
//   console.log("Func 1 Console Log 1");

//   console.log("Func 1 Console Log 2");

//   alert("Alert Message");
// }

// const func2 = () => {
//   console.log("Func 2 Console Log 1");

//   console.log("Func 2 Console Log 2");
// }

// func1();
// func2();


// ÖRNEK 2
// let x = 10;
// console.log("1. Gelen Veri", x);


// setTimeout(() => {
//   x = x + 5;
// }, 1000);

// console.log("2. Gelen Veri", x);


// x = x + 5;
// console.log("3. Gelen Veri", x);


// CALL STACK


// ÖRNEK 3
// function func1() {
//   console.log("Ben birinciyim");
//   func2();
//   console.log("Ben yine birinciyim");
// }

// function func2() {
//   console.log("Ben ikinciyim");
//   func3();
//   console.log("Ben yine ikinciyim");
// }

// function func3() {
//   console.log("Ben üçüncüyüm");
// }

// func1();


// ÖRNEK 4
// function add(x, y) {
//   return x + y;
// }

// function average(x, y) {
//   return add(x, y) / 2;
// }

// let x = average(6, 8);
// console.log(x);


// ÖRNEK 5
// function task(message) {
//   let n = 10000000;
//   while (n > 0) {
//     n--;
//   }

//   console.log(message);
// }

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 1000);

// console.log("3");
// console.log("4");

// task("İşlem Tamamlandı");

// setTimeout(() => {
//   console.log("5");
// }, 2000);

// task("İşlem Tamamlandı 2");

// Callbackler ayrı bir sıraya girerler. Üstteki örnekte ilk task fonksiyon çağrısının console.log("2") den önce çıktı vermesinin sebebi budur


// CALLBACK

// ÖRNEK 6
// const myName = () => {
//   console.log("Benim adım Arin");
// }

// setTimeout(myName, 3000);


// ÖRNEK 7
// setTimeout(() => {
//   console.log("Benim adım Arin");
// }, 3000);


// ÖRNEK 8
// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//   alert("You clicked me");

//   let pElem = document.createElement('p');
//   pElem.textContent = "This is a newly-added paragraph.";
//   document.body.appendChild(pElem);
// });

// let h1Elem = document.createElement('h1');
// h1Elem.textContent = "HEADER";
// document.body.appendChild(h1Elem);


// ÖRNEK 8
// const books = [
//   { name: "Pinball 1973", author: "Haruki Murakami" },
//   { name: "Özgürlük", author: "Zygmunt Baumann" },
//   { name: "Türkiye'de Çağdaşlaşma", author: "Niyazi Berkes" }
// ]

// const listBooks = () => {
//   books.map((book, index) => {
//     console.log(book, index)
//   })
// }

// const addNewBook = (newBook, callback) => {
//   books.push(newBook);
//   callback();
// }

// addNewBook({ name: "Berlin Hatıralarım", author: "Hüsrev Gerede" }, listBooks);



