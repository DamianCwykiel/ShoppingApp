class Persona {
    constructor(name, age){
         this.name = name;
         this.age = age;
    }
    getCheers(){
        return`hallo there! ${this.name}, what's up? You're ${this.age} years old right?`;
    }
}

class Student extends Persona {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major
    }
    getCheers(){
        let description = super.getCheers();
        
        if(this.hasMajor()){
            description += ` Your major is: ${this.major}.`;
        }
        return description;
    }
}
/*
class Traveler extends Persona{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasLocation(){
        return !!this.homeLocation
    }

    homeGreet(){
        let locator = super.getCheers();
          
        if(this.hasLocation()){
              locator += `your home Location is ${this.homeLocation}.`;
          }else{
            return`hallo! ${this.name}.`;
          }

        return locator;

    }
}
*/
class Traveler extends Persona{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    myGreets(){

        let greets = super.getCheers();
        if(this.homeLocation){
            greets += `your home is : ${this.homeLocation}`;
        }
        return greets;
    }
}   


const one = new Traveler('Wladek', 53, 'Rzeszow');
console.log(one.myGreets());

const two = new Traveler('Izar', undefined, 'nowhere');
console.log(two.myGreets());

const three = new Traveler(undefined, 65, 'nowhere');
console.log(three.myGreets());