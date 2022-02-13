// OBJECTS - Part III

// 1 - Shorthand Properties 

let name = 'arin', age = 5;

// Varolan bir değişkeni nesneye atamak istersek aşağıdaki gibi atayabiliriz.
const myObj = {
  name: name,
  age: age
}

// Daha kısa yoldan ve tekrara düşmeden aşağıdaki gibi de atayabiliriz. myObj name ve age propertylerine sahip ve bu propertyler değerlerini objenin dışında objeden önce tanımlanmış name ve age değişkenlerinden alıyorlar.
const myObj1 = {
  name,
  age
}

console.log(myObj1.name);
console.log(myObj1.age);

// 2 - Computed Property Names

// ES5 Kullanımı 
let prop1 = 'name';
let myObj2 = {}
myObj2[prop1] = 'arin'
console.log(myObj2);

// ES6 Kullanımı
let prop2 = 'name';
let myObj3 = {
  [prop2]: 'arin'
}
console.log(myObj3);

// 3 - Short Method Syntax

// Alışık olduğumuz nesne içerisinde fonksiyon tanımlama tarzı aşağıdaki gibi.
const person = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName: function () {
    return this.name + " " + this.surname
  }
}

// Daha kısa şekilde aşağıdaki gibi bir kullanım yapabiliriz.
const person2 = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName() {
    return this.name + " " + this.surname
  }
}

console.log(person2.fullName());

// 4 - Object Destructuring

// Destructuring nesneden belirli propertyleri çekip alma işlemine verilen addır. 

const person3 = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName() {
    return this.name + " " + this.surname
  }
}

// En eski kullanım şekli aşağıdaki gibidir
let myVar1 = person.name;
console.log(myVar1);
let myVar2 = person.age;
console.log(myVar2);

// Aşağıdaki kullanımda let ile myVar3 ve myVar4 adında iki adet değişken oluşturulur. myVar3'e person nesnesinden name propertysinin değeri atanır. myVar4'e ise person nesnesinden age propertysinin değeri atanır.
let { name: myVar3, age: myVar4 } = person;
console.log(myVar3);
console.log(myVar4);

// Genelde destructuring yapılırken atama yapılacak olan değişken ismi ile nesnenin propertysi aynı isme sahip olur. Aşağıda let ile name ve age değişkenleri oluşturuluyor. name değişkenine person nesnesinden name propertysinin değeri atanıyor. age değişkenine person nesnesinden age propertysinin değeri atanıyor.
// let { name: name, age: age } = person;
// console.log(name);
// console.log(age);

// En indirgenmiş ve en yaygın kullanılan hali ise aşağıdaki gibidir. 
/* let { name, age } = person;
console.log(name);
console.log(age); */

const books = [
  {
    title: "Kırmızı Pazartesi",
    author: "Haruki Murakami",
    pageNum: 296,
    imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg",
    topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
  },
  {
    title: "Şeker Portakalı",
    author: "Jose Muro de Vasconselos",
    pageNum: 200,
    imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064031-1.jpg",
    topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
  },
  {
    title: "En Uzun Yüzyıl",
    author: "İlber Ortaylı",
    pageNum: 296,
    imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001744876001-1.jpg",
    topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    pageNum: 200,
    imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001828853001-1.jpg",
    topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
  },
  {
    title: "Karamazov Kardeşler",
    author: "Fyodor Mihayloviç Dostoyevski",
    pageNum: 200,
    imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001803800001-1.jpg",
    topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
  },
  {
    title: "Sultanın Korsanları",
    author: "Emrah Safa Gürcan",
    pageNum: 296,
    imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001780787001-1.jpg",
    topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
  }
]

// Geniş kapsamlı bir örnek için aşağıdaki kullanım yapıldı.
for (const { title, author, pageNum } of books) {
  console.log(title + ': ' + author + ': ' + pageNum);
}

// 5 - Spread Operator in Object Literals (...)

// Spread operatörü nesneleri kopyalamak veya birleştirmek için kullanılır. 

// person5 nesnesi önceden varolan person4 nesnesinden kopyalanarak oluşturulmuş oldu
const person4 = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName() {
    return this.name + " " + this.surname
  }
}

const person5 = { ...person4 };
console.log(person5);

// arin nesnesi myObj5 ve myObj6 nesnesinin birleşmesi ile oluşturuldu. (Araya kendimiz school propertysini de ekledik).
const myObj5 = {
  name: 'arin',
  age: 6
}
const myObj6 = {
  job: 'student',
  gender: 'female'
}

const arin = { ...myObj5, school: 'Zehra Baysal', ...myObj6 };
console.log(arin);

// 6 - REST Operator in Object Literals

const person6 = {
  name4: 'John',
  surname: 'Doe',
  age: 40,
  fullName() {
    return this.name + " " + this.surname
  }
}

// person nesnesinde bulunan name propertysinin değeri const name değişkenine atandı. ...rest kullanımı ile ise name propertysi hariç diğer bütün propertyler rest adında yeni bir nesneye kopyalandı.
// const { name, ...rest } = person6;
// console.log(name);
// console.log(rest);

// 7 - Object Values - Object Entries

const person7 = {
  name: 'John',
  surname: 'Doe',
  age: 40,
  fullName() {
    return this.name + " " + this.surname
  }
}

console.log(Object.keys(person7)); // Propertyleri döndürür. ['name', 'surname', 'age', 'fullName']
console.log(Object.values(person7)); // değerleri döndürür. ['John', 'Doe', 40, f]
console.log(Object.entries(person7)); // her bir key value değerini ayrı bir dizi olarak döner. person7 nesnesi için düşünücek olursak 2 elemanlı 4 adet dizi döner.