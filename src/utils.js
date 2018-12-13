console.log('utils.js is runnning ok');

//name export, more than one item

export const count = (x,y,z) => ( y / x) + z; 
export const add = (a, b) => a + b; 
//export default , only one item

const subtract = (a, b) => a - b;

export default subtract;

//or
//export default (a, b) => a - b;

//or
//export { count, add, subtract as default };

//export -default export - named exports
