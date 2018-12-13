

class Counter extends React.Component{
  constructor(props){
    super(props);
      this.handlerAddOne = this.handlerAddOne.bind(this);
      this.handlerMinusOne = this.handlerMinusOne.bind(this);
      this.handlerReset = this.handlerReset.bind(this);
      this.state = {
        count: [],
        name: 'MI'
      };
  }

componentDidMount () {
  const stringCount = localStorage.getItem('count');
  const count = parseInt(stringCount, 10);

  if (!isNaN(count)) {
    this.setState(()=> ({ count /* lub count : count */ }));
  }
}

  componentDidUpdate(prevProps, prevState) {
    //console.log('componentDidUpdate');
    if(prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }


  handlerAddOne(){
   //this.status.count = this.status.count +1;
   this.setState((dodajJeden)=>{
     return {
       count: dodajJeden.count +1
     };
   });
  }
  handlerMinusOne(){
    //this.state.count = this.state.count -1;
    this.setState((odejmijJeden)=>{
     return{
       count: odejmijJeden.count -1
      };
   });
  }
  handlerReset(){
    this.setState(()=>{
     return{
       count: 0
     };
    });
    //newest version
    //this.setState((prevState) => {
      //return {
        //count: prevState.count + 1
      //};
    //});
    //older version
    //this.setState({
      //count:0
    //});
    //this.setState({
      //count: this.state.count + 1
    //});
  }
  render(){
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick = {this.handlerAddOne}>+1</button>
        <button onClick = {this.handlerMinusOne}>-1</button>
        <button onClick = {this.handlerReset}>reset</button>
      </div>

    );
  }
}

ReactDOM.render(<Counter count ={-10} />, document.getElementById('app'));

/*

let count = 0;
const addOne = () => {
  count++;// or count = count + 1//
  renderCounterApp();
}
const minusOne = () => {
  count--;//or counter = counter -1//
  renderCounterApp();
}
const resetAll = () => {
  count = 0;
  renderCounterApp();
}

/*const user = {

  name: 'Damian',
  age: `30`,
  location: 'Rzeszow',
}
function getLocation(location) {
  if(location){
    return <p>Location: {location}</p>;
  }
  else {
    return undefined;
  }
}
const template2 = (
  <div> 
    <h1>{user.name ? user.name : 'Gal Anonim'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
  );*//*
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetAll}>Reset</button>
    </div>
  );

  ReactDOM.render(template2, appRoot);
};
renderCounterApp();
*/