// CLASS DECLARATION 
class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  fullName() {
    return this.name + " " + this.surname;
  }

  static showName = "Person";

  static staMethod() {
    console.log("Static Method Çalışıyor");
  }

  // static olarak tanımlanan class üyelerine sadece class içerisinde ulaşılabilir. class ın instanceları bu üyelere ulaşamaz.
}

// console.log(typeof Person); classlarda fonksiyondur

const arin = new Person("Arin", "Çekiç", 5);
const elis = new Person("Elis", "Çekiç", 3);

// console.log(arin instanceof Person); arin Person classının instance ı mı değil mi kontrol eder.


console.log(arin.showName); // undefined
console.log(arin.staMethod()); // HATA VERİR

// Aşağıdaki iki satırı çalıştırmadan önce üstteki iki satırı yorum içerisine al
console.log(Person.showName); // Person 
console.log(Person.staMethod()); // Static Method Çalışıyor

class Engineer extends Person {
  constructor(name, surname, age, job) {
    super(name, surname, age);
    this.name = name;
    // super methodunu kullanmayıp atamaları aşağıdaki gibi yapmaya çalışırsak hata alırız.
    // this.surname = surname;
    // this.age = age;
    // this.job = job;
  }

  getMoney() {
    console.log("PARA KAZAN");
  }
}

const gurcan = new Engineer("Gürcan", "Çekiç", 40, "Engineer");




