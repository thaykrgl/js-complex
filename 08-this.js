console.log(this); // window nesnesini getiriyor
console.log(this.location);

// Alttaki iki satır aynı işi yapıyor
console.log(this.location.href);
console.log(window.location.href);

console.log(this === window); // true döner


const name = "Arin";

console.log(name); // Arin 
console.log(this.name); // Gürcan
console.log(this); // window nesnesine referans verir

// console.log(this.name) in Gürcan döndürmesinin sebebi hoisting özelliği olan fonksiyon(function declaration) içerisinde atamasının yapılmış olması  

// Function Declaration 
function func1() {
  this.name = "Gurcan";
  console.log(this);
  console.log(this.location);
  console.log(this.location.href);
  console.log(this.age); // undefined geliyor çünkü function expression da hoisting özelliği yok
}

// Function Expression
const func2 = function () {
  this.age = 40;
  console.log(this);
  console.log(this.location);
  console.log(this.location.href);
  console.log(this.name); // Gurcan
}


func1();
func2();


// Fonksiyonların çağırılma sırası değişirse hem this.name hem de this.age in değerlerine ulaşabiliriz. Ama şuanki halleriyle this.age e ulaşamıyoruz. Bu sorun tamamiyle hoistingle alakalı. Function expressionda hoisting özelliği yok. this.age ulaşamama sebebimizde function expression ile tanımlanan fonksiyonun daha sonra tanımlanmış olması ve this.age in atamasının orada yapılıyor olması. Function expression ın hoisting özelliği olsaydı böyle bir sıkıntı yaşanmaz ve this.age e ulaşabilirdik. 

// Yukarıdaki iki fonksiyonda da this keywordü window nesnesine referans verir.

console.log(name); // Gurcan
console.log(age); // 40
console.log(this.name); // Gurcan
console.log(this.age); // 40


// Constructor Function
function Person(name2, surname2, age2) {
  const obj = {};
  console.log(obj);
  obj.name = name2;
  console.log(obj);
  obj.surname = surname2;
  console.log(obj);
  obj.age = age2;
  obj.fullName = function () {
    return obj.name + " " + obj.surname
  }

  return obj;
}

// Yukarıdaki constructor fonksiyonuyla aynı işi yapıyor
function Person(name2, surname2, age2) {
  this.name = name2;
  this.surname = surname2;
  this.age = age2;
  this.fullName = function () {
    return this.name + " " + this.surname
  }

  return obj;
}

// Yukarıdaki constructor fonksiyonunun class gösterimi
class Person2 {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  fullName = function () {
    return this.name + " " + this.surname
  }
}

const arin = new Person2("Arin", "Çekiç", 5);
console.log(arin);
const gurcan = new Person2("Gürcan", "Çekiç", 40);
console.log(gurcan);


const arin2 = {
  name: "Arin",
  age: 5,
  surname: "Çekiç",
  fullName: function () {
    console.log(this);
    // return this.name + " " + this.surname
  },

  mother: {
    name: "Gamze",
    age: 40,
    surname: "Çekiç",
    fullName: function () {
      console.log(this);
      // return this.name + " " + this.surname
    }
  }
}

console.log(arin2.fullName()); // üstteki fonksiyonu çalıştırıyor ve arin2 nesnesine referans veriyor
console.log(arin2.mother.fullName()); // alttaki fonksiyonu çalıştırıyor ve mother nesnesine referans veriyor


const elis = {
  name: "Elis",
  funcy: function () {
    console.log(this === elis);
  }
}

console.log(elis.funcy());

const funcy2 = elis.funcy;
console.log(funcy2()); // false döner çünkü funcy2 değişkenine atadığımız fonksiyon artık bir objeye bağlı fonksiyon olma özelliğini kaybetti this bir objeye bağlı fonksiyon olmadan kullanılırsa da daima window nesnesini döner.

