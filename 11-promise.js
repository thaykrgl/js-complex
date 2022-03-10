// Çalıştırmak istediğin örneği yorum satırından çıkar.

//const promise1 = new Promise(function (resolve, reject) {
// ÖRNEK 1
//resolve("DATA"); // resolve dönerse promise in state i fulfilled olur
//reject("ERROR"); // reject dönerse promise in state i rejected olur
// resolve veya reject dönmesse promise in state i pending olur

// ÖRNEK 2
// resolve("DATA");
// resolve("DATA2");
// reject("ERROR");
// reject("ERROR2");
// Yukarıdaki gibi birden çok durum söz konusuysa ilki geçerli olur
//})

// ÖRNEK 1 VE 2 YE AİT
//console.log(promise1);


// ÖRNEK 3
// const promise1 = new Promise(function (resolve, reject) {

//   //resolve("DATA");
//   reject("ERROR"); // çalıştırırken resolve u yorum satırına al
// })

// promise1.then(function (value) {
//   console.log(value);
// })

// yukarıda bir promise tanımladık ve bu promise başarılı bir dönüş yaptı. başarılı dönüş yaptığı için then fonksiyonunda bunu yazdırmak istiyoruz. then fonksiyonu parametre olarak fonksiyon alıyor. bu fonksiyonda parametre olarak resolve fonksiyonunun içerisindeki değeri alıyor. yukarıda bu değeri konsola yazdırdık. then kullanımı yaygın olarak yukarıdaki gibi değil de aşağıdaki gibi arrow function ile kullanılır.

//promise1.then(value => console.log(value));

// promise reject dönerse bunu catch fonksiyonu ile yakalayabiliriz.

//promise1.catch(reason => console.log(reason));


// ÖRNEK 4
// const promise1 = new Promise((resolve, reject) => {

//   resolve();
//   //reject(); // çalıştırırken resolve u yoruma al
// })


// promise başarılı ise yani resolve dönüyor ise then fonksiyonuyla biz kendimizde bi şeyler yazabiliriz.
// then fonksiyonu içerisindeki fonksiyon callbacktir. promise başarılı(resolve dönüyorsa) ise then fonksiyonu aracılığıyla çalışmış olur.

// promise1.then(() => {
//   console.log("VERİLER ALINDI");
// });

// promise1.catch(() => {
//   console.log("VERİLER ALINMADI");
// });

// then ve catchi zincir şeklinde iç içe yazabiliriz yukarıdaki yazımdan daha yaygın bi kullanım
// finally promise in resolve ya da reject olmasına bakmaksızın her halükarda çalışır

// promise1
//   .then(() => {
//     console.log("VERİLER ALINDI");
//   })
//   .catch(() => {
//     console.log("VERİLER ALINMADI");
//   })
//   .finally(() => {
//     console.log("ÇALIŞ KÖLE");
//   })

// ÖRNEK 5

// const promise1 = new Promise((resolve, reject) => {

//   //resolve();
//   reject(); // çalıştırırken resolve u yoruma al
// })

// // promise in reject dönmesi durumunda bunu then le de halledebiliriz. then fonksiyonu parametre aldığı ilk callback fonksiyonunu resolve durumu için, parametre aldığı ikinci callback fonksiyonunu reject durumu için kullanır. ama çoğunlukla bu şekilde kullanılmaz. resolve için then fonksiyonu reject için ise catch fonksiyonu kullanılır.


// promise1.then(() => {
//   console.log("VERİLER ALINDI");
// },
//   () => {
//     console.log("VERİLER ALINMADI");
//   }
// )


// ÖRNEK 6

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

// yukarıdaki örneği callback ile çözmüştük. sorunumuz yeni eklenen kitabı görebilmek için her eklediğimiz kitaptan sonra listeleme fonksiyonunu çağırmak zorunda oluşumuzdu. bunu ekleme fonksiyonuna listeleme fonksiyonunu parametre vererek yani callback görevi gördürerek çözmüştük. böylelikle kitap ekleme fonksiyonu çalıştıktan sonra listeleme fonksiyonu çalışıyor.

// şimdi bu problemi promise ile nasıl çözeriz onu görücez aşağıda


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

// const addNewBook = (newBook) => {
//   const promise1 = new Promise((resolve, reject) => {
//     books.push(newBook);
//     resolve();
//     //reject();
//   })

//   return promise1;
// }

// addNewBook({ name: "Berlin Hatıralarım", author: "Hüsrev Gerede" })
//   .then(() => {
//     console.log("Yeni Liste");
//     listBooks();
//   })
//   .catch(() => {
//     console.log("HATA ALDIK");
//   })


// ÖRNEK 7

// iki sayı girilecek ve toplanacak girilenler number tipinde değilse hata vericek

// const addNumbers = (num1, num2) => {
//   const promise1 = new Promise((resolve, reject) => {
//     const sum = num1 + num2;
//     (typeof num1 !== "number" || typeof num2 !== "number")
//       ? reject()
//       : resolve(sum);
//   })
//   return promise1;
// }

// addNumbers(3, "4")
//   .then((value) => {
//     console.log(value);
//   })
//   .catch(() => {
//     console.log("HATALI GİRİŞ");
//   })




