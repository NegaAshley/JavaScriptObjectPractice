class Pet { //example of superclass

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} ate!`);
    }
}

class Cat extends Pet { //example of inheriting from superclass Pet

    constructor(name, age, livesLeft = 9) { //giving a default value for livesLeft
        super(name, age); //example of using super constructor from pet for reusability
        this.livesLeft = livesLeft;
    }

    meow() {
        return "Meow!";
    }
}

class Dog extends Pet { //example of inheriting from superclass Pet

    eat() { //example of overwriting a method
        console.log(`${this.name} scarfs their food!`);
    }
    woof() {
        return "Woof!";
    }
}

let meepo = new Cat("Meepo", 8);
let buffy = new Dog("Buffy", 10);
meepo.eat();
console.log(meepo.meow());
buffy.eat();
console.log(buffy.woof());

