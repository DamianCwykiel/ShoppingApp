//import './playground/Header.js';

//import './utils.js';

// import subtract, { count, add } from './utils.js'; 

// //import './person.js';
// import isSenior, { isAdult, canDrink} from './person.js';

// console.log('app.js is working ok');
// console.log(count(16, 4, 6));
// console.log(add(10, 90));

// console.log(isAdult(18));
// console.log(canDrink(20));

// console.log(subtract(100, 10));

// console.log(isSenior(68));

//import validator from 'validator';
 
//console.log(validator.isCreditCard('0000 0000 0000 0000'));
//console.log(validator.isEmail('test123@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';
//  import AddOption from './components/AddOption';
//  import Header from './components/Header';
//  import Action from './components/Action.js';
//  import Options from './components/Options';
import IndecisionApp from './components/IndecisionApp.js';
import 'normailze.css/normalize.css';
import './styles/styles.scss';

// const template = <h1> JSX from webpack </h1>;

// ReactDOM.render(template, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//EXERCISE. PASSING CHILDREN TO COMPONENT//

// const Layout = (props) => {
//     return(
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
//     );
// };

// const template = (
//     <div>
//         <h1>Title</h1>
//         <p>This's a page</p>
//     </div>
// );

// ReactDOM.render((
//     <Layout>
//         <div>
//             <h1>Title</h1>
//             <p>This's a page</p>
//         </div>
//     </Layout>
//     ), document.getElementById('app'));


//exercises//
// class OldSyntax {
//     constructor() {
//         this.name = 'Jon';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting () { 
//         return `hallo there. My name is vel ${this.name}.`;
//     }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(oldSyntax.getGreeting());

// //---------------------

// class NewSyntax {
//     name = 'Patt';
//     getGreeting = () => {
//         return `hallo there. My name is ${this.name}.`;
//     }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());