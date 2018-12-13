console.log('App.js is running!');

// JSX - JavaScript XML
const app = {

  title:'Shopping List',
  subtitle: 'What has my wife wanted me to buy?',
  options: [],
}; 

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options =[];
  render();
};

const onShopping = () => {
  const randomNumb = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumb];
  alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div> 
      <h1>{app.title ? app.title : 'Nie istnieje' }</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here my list of things: ' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onShopping}>What should I buy firstly?</button>
      <button onClick={onRemoveAll}>Remove ALL</button>
      <ol>
        {
        app.options.map((option) => <li key={option}>{option}</li>)

        }
      </ol>
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Product</button>
      </form>
    </div>
    );

    ReactDOM.render(template, appRoot);
};

render();