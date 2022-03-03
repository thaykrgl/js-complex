// Function Declaration
console.log(square(4));

function square(num) {
  return num * num;
}

// Function Expression
const square2 = function (num) {
  return num * num;
}

console.log(square2(6));

// Function declaration da console.logu fonksiyondan öncede yazabiliyoruz. Hoisting özelliği olduğu için sorun olmuyor. Function Expressionda ise hata almak istemiyorsak önce fonksiyonu tanımlamak gerekiyor.

// Arrow Function Expression
// const square3 = function(num){ return num * num }
// const square3 = (num) => { return num * num }
const square3 = num => { return num * num }

console.log(square3(8));

window.name = "Arin";

function tellName() {
  console.log(this);
  console.log(this.name);
}

tellName();

// yukarıdaki fonksiyon this olarak window nesnesini, this.name olarakta fonksiyon dışında ataması (window.name = "Arin") yapılan Arin i döner

const Person = {
  name: "Elis",
  tellName: function () {
    console.log(this);
    console.log(this.name);
  }
}

Person.tellName();

// yukarıdaki fonksiyon objeye bağlı olduğu için this olarak Person nesnesini, this.name olarakta obje içerisinde ataması(name: Elis) yapılan Elis i döner

const tellName = () => {
  console.log(this);
  console.log(this.name);
}

tellName();

// yukarıdaki arrow function normal fonksiyon (function declaration) tanımında olduğu gibi,
// this olarak window, this.name olarakta ataması yapılan (window.name = "Arin") Arin döner

const Person2 = {
  name: "Elis",
  tellName: () => {
    console.log(this);
    console.log(this.name);
  }
}

Person2.tellName();

// yukarıdaki fonksiyon this olarak window, this.name olarakta ataması yapılan (window.name = "Arin") arin döner. Arrow function yerine normal fonksiyon tanımlaması (function declaration) kullanmış olsak, fonksiyon bir objeye bağlı olduğu için this in fonksiyonun içinde bulunduğu nesneyi, this.name inde obje içerisinde ataması yapılan (name: "Elis") dönmesi beklenirdi ama arrow functionda böyle bi durum yok çünkü arrow functionun kendine ait bir this i bulunmuyor


const person = {
  name: "Elis",
  tellName: function () {
    console.log(this);
    console.log(this.name);

    setTimeout(function () {
      console.log(this);
      console.log(this.name)
    }, 2000)
  }
}

person.tellName();

// yukarıdaki fonksiyonda tellName normal bir fonksiyon (function declaration) olarak tanımlanıyor. bir objeye bağlı olduğu içinde this olarak bağlı olduğu nesneyi, this.name olarakta bağlı olduğu nesnede ataması (name: "Elis") yapılan Elis i dönüyor. setTimeout ise yeni bir fonksiyon olduğu için this olarak window, this.name olarakta ataması (window.name = "Arin") yapılan Arin i döner


const person2 = {
  name: "Elis",
  tellName: () => {
    console.log(this);
    console.log(this.name);

    setTimeout(() => {
      console.log(this);
      console.log(this.name)
    }, 2000)
  }
}

person2.tellName();

// yukarıdaki fonksiyonda tellName arrow function olarak tanımlanıyor. this olarak window, this.name olarakta dışarıda ataması (window.name = "Arin") yapılan Arin i dönüyor. setTimeout da aynı şekilde this olarak window, this.name olarakta dışarıda ataması (window.name = "Arin") yapılan Arin i dönüyor 


const person3 = {
  name: "Elis",
  tellName: function () {
    console.log(this);
    console.log(this.name);

    setTimeout(() => {
      console.log(this);
      console.log(this.name)
    }, 2000)
  }
}

person3.tellName();

// yukarıdaki kullanım en yaygın olanı. tellName normal bir fonksiyon (function declaration) olarak tanımlandığı ve objeye bağlı olduğu için this olarak bağlı olduğu nesneyi, this.name olarakta bağlı olduğu nesnede ataması (name: "Elis") yapılan Elis i dönüyor. setTimeout da teelName e bağlı olduğu için this olarak tellName in bağlı olduğu nesneyi, this.name olarakta tellName in bağlı olduğu nesnede ataması (name: "Elis") yapılan Elis i dönüyor


// Arrow functionlarla constructor fonksiyon yazamayız çünkü arrow functionların kendisi this e sahip değil

// Arrow functionı direkt olarak bir nesnenin fonksiyonu olarak yazmak tavsiye edilmiyor aşağıda örnekleniyor

const myObj = {
  year: 2020,
  showYear1: function () {
    console.log(this.year, this);
  },
  showYear2: () => { console.log(this.year, this) }
}

myObj.showYear1();
myObj.showYear2();

// showYear1 fonksiyonu this.year olarak bağlı olduğu nesnede ataması (year:2020) yapılan 2020, this olarakta bağlı olduğu nesneyi döner

// showYear2 fonksiyonu arrow function olduğu için this e sahip değil bu sebeple this.year olarak undefined, this olarakta window nesnesini döner


// CALL 
// CALL bir fonksiyonu ilgili olduğu nesneden farklı bir nesnede kullanmamızı sağlıyor

window.grade = 100;
window.name = "Taha";

const student = {
  examResult: function () {
    return this.name + " " + this.grade;
  }
}

const student1 = {
  name: "Arin",
  grade: 80
}

const student2 = {
  name: "Elis",
  grade: 77
}

console.log(student.examResult.call(student1)); // arin 80 döner
console.log(student.examResult.call(student2)); // elis 77 döner

// yukarıdaki fonksiyonu (student nesnesi içerisinde bulunan) arrow function ile tanımlasaydık
// name olarak ataması (window.name = "Taha") yapılan Taha, grade olarak ataması (window.grade = 100) yapılan 100 dönerdi. 


