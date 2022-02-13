// CLASS Part-1

// Classlarda fonksiyondur. Nesne oluştururken constructor(kurucu method) lardan faydalanıyorduk.

// Constructor Function
function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  // this.fullName = fullName;
}

// Constructorun görevi yeni bir nesne oluşturulurken çalışıp gerekli şeyleri yapmaktır. Eğer constructorun içine fullName fonksiyonunu koyarsak her nesne oluşturulduğunda sıfırdan fonksiyon tanımlanıyormuş ve çalıştırılıyormuş gibi oluyor. Belki bu birkaç nesne oluşturduğumuzda sorun oluşturmayabilir ancak çok fazla sayıda nesne oluşturulduğunda sorun yaratıyor. Bu sebeple fonksiyonu globalde oluşturup constructorun içinde bu fonskiyonu çağırıyoruz.

// function fullName() {
//   return this.name + " " + this.surname
// }  Çalışması için constructor içindeki yorum satırının açılması gerekir.

// Fonksiyonu globalde tanımlamak sorunumuzu çözdü ancak çok fazla sayıda fonksiyonumuz olursa bunların tamamını globalde tanımlamaktansa bu fonksiyonları prototype da tanımlayabiliriz.
Person.prototype.fullName = function () {
  return this.name + " " + this.surname
}

Person.prototype.friends = ["Ela", "Rüzgar"]

const arin = new Person("Arin", "Çekiç", 5);
const elis = new Person("Elis", "Çekiç", 3);

console.log(arin); // {name: 'Arin', surname: 'Çekiç', age: 5 }
console.log(elis); // {name: 'Elis', surname: 'Çekiç', age: 3 }

console.log(arin.fullName()); // Arin Çekiç
console.log(elis.fullName()); // Elis Çekiç
console.log(arin.friends); // ['Ela', 'Rüzgar']
console.log(elis.friends); // ['Ela', 'Rüzgar']
arin.friends.push("Çınar");
console.log(arin.friends); // ['Ela', 'Rüzgar', 'Çınar']
console.log(elis.friends); // ['Ela', 'Rüzgar', 'Çınar']

// Yukarıda fonksiyonları prototypeda tanımlamanın sıkıntısını görmüş olduk. Biz sadece arin nesnesine arkadaş eklemek istediğimizde friends fonksiyonu prototypeda tanımlı olduğu için elis nesnesine de o arkadaşları ekledi.

// CLASS DECLARATION
class Person2 {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.friends = ["Ela", "Rüzgar"]
  }
  fullName() {
    return this.name + " " + this.surname
  }
}


// CLASS EXPRESSION

// const Person = class {
//   constructor(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.friends = ["Ela", "Rüzgar"]
//   }

//   fullName() {
//     return this.name + " " + this.surname
//   }
// }

const arin2 = new Person2("Arin", "Çekiç", 5);
const elis2 = new Person2("Elis", "Çekiç", 3);

console.log(arin2); // {name: 'Arin', surname: 'Çekiç', age: 5, friends: Array(2)}
console.log(elis2); // {name: 'Elis', surname: 'Çekiç', age: 3, friends: Array(2)}
console.log(arin2.fullName()); // Arin Çekiç
console.log(elis2.fullName()); // Elis Çekiç

console.log(arin2.friends); // ['Ela', 'Rüzgar']
console.log(elis2.friends); // ['Ela', 'Rüzgar']
arin2.friends.push("Çınar");
console.log(arin2.friends); // ['Ela', 'Rüzgar', 'Çınar']
console.log(elis2.friends); // ['Ela', 'Rüzgar']

console.log(Person2)

console.log(typeof Person2) // function