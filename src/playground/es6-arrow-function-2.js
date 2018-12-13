//argument object - no longer bound with arrow functions
//const add = function (a,b){
    //console.log(arguments);
//return a+b;

//};
const add = (a,b) => {
    //console.log(arguments);
return a+b;

};
console.log(add(55, 1))

//this keyword - no longer bound with arrow functions

/*const user = {
name: 'Dmaian',
cities: ['Wroclaw', 'Toronto', 'Ahtopol'],
printPlacesLived: function () {

const that = this;

this.cities.forEach(function(city){
    console.log(that.name + 'has lived in: ' + city);


});

}

};

user.printPlacesLived();
*/

//const user = {
    //name: 'Dmaian',
    //cities: ['Wroclaw', 'Toronto', 'Ahtopol'],
    //printPlacesLived () {
    
    //const that = this;
    
    //this.cities.forEach(/*function*/(city) => {
        //console.log(this.name + 'has lived in: ' + city);
    
    
    //});
    
    //}
    
    //};

    //user.printPlacesLived();

    const user = {
        name: 'Dmaian',
        cities: ['Wroclaw', 'Toronto', 'Ahtopol'],
        printPlacesLived () {
        return this.cities.map((city) => this.name + ' has lived in: ' + city);
        //const that = this;
        
       // this.cities.forEach(/*function*/(city) => {
            //console.log(this.name + 'has lived in: ' + city);
        
        
        //});

        }
        
    };
        console.log(user.printPlacesLived());
        //user.printPlacesLived();

//challenge area

const mnozenie = {
    numbers: [2, 6, 8],
    multiplyBy: 2,
    pokazWynik (){
        return this.numbers.map((number) => 'gives: ' + number * this.multiplyBy);
    }
};
console.log(mnozenie.pokazWynik());