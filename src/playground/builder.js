let visible = false;

const buttonTrigger = () => {
    visible = !visible;
    switcher();
};

const switcher = () =>{
     const example = (
         <div>
           <h1>THE SWITCHER</h1>
           <button onClick={buttonTrigger}>
           {visible ? 'show text' : 'hide text'}
           </button>
           {visible && (
               <div>
               <p>This is some text that I wanted to hide.</p>
               </div>
           )}
         
         </div>
     )
ReactDOM.render(example, document.getElementById('app'));
};

switcher();