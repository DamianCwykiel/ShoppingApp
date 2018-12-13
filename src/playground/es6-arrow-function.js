function square (x){
    return x*x*x*x;
};

console.log(square(3));

//const squareArrow = (x) => {

    //return x*x;

//};

const squareArrow = (x)=>x*x;

console.log(squareArrow(222));

const getFirstNameName = (fullName) => {

    return fullName.split(' ')[0];

};

console.log(getFirstNameName('Damian Cyrkiel'));

const getFirstName = (fullName) => fullName.split(' ')[1];

console.log(getFirstName('Damian Cyrkiel'));