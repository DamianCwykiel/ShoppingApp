var nameVar = 'Damian';
var nameVar2 = 'Igor';

console.log('nameVar', nameVar);

let nameLet = 'Jan';
//var nameLet = 'Igor';


console.log('nameLet', nameLet)


const nameConst = 'Frank';
//nameConst = 'Gienio';

console.log('nameConst', nameConst);

//block scoping
function petName() {
    const getPetName ='Waclaw';
    return getPetName;
}

const getPetName = petName();
console.log(getPetName);


const fullName = 'Damian Cwykiel';
let firstName;

if(fullName){

    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);