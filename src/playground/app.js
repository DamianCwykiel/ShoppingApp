/*
const obj = {
  name: "Dmaian",
  getName(){
    return this.name;
  }
};
const getName = obj.getName.bind({name:'g'});

console.log(getName());
*/




//stateless functional component


class IndecisionApp extends React.Component {
    constructor(props){
      super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
          options: []
        };
    }

    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        
        if(options) {
          this.setState(() => ({ options /*in jsx 6 the same as options: options*/}));
        }
      } catch (e) {
        //do nothing 
      }
    }
    
    componentDidUpdate(prevProps, prevState) { 
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        //console.log('saving data');
      }
    }

    componentWillUnmount() {
      console.log('componentWillUnmount')
    }

    handleDeleteOptions() {
      this.setState(() => ({options: [] }));

      //old longer option to decribe an above function
        
      // this.setState(()=>{
      //   return{
      //      options: []
      //    };
      // });  
    }
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option)=> optionToRemove !== option)
        //return optionToRemove !== option;
      }));
    }

    handlePick(){
      const randomNumb = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNumb];
      alert(option);
    }
    handleAddOption(option){
      if(!option){
        return 'Enter the valid value to add an item!';
      }else if (this.state.options.indexOf(option) > -1){
        return'This option already exists!';
      }

      this.setState((prevState)=>({ options: prevState.options.concat(option) }));
        
      //old longer option to decribe an above function

      // this.setState((prevState) => {
      //   return {
      //     options: prevState.options.concat(option)
      //   }
        
      // });
    }

  render() {
    //const title = 'Independion';
    const subtitle = 'What shall I do?';
    //const options = ['thing one', 'thing two', 'thisng tree'];
       return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
        />
        <Options 
        options= {this.state.options} 
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
        handleAddOption={this.handleAddOption}
        />
        
      </div>
    );
  }
}

const Header = (props) =>{
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'INDECISION'
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) =>{
    return(
      <div>
        <button 
        onClick = {props.handlePick}
        disabled={!props.hasOptions}
        >
        What should I do?
        </button>
      </div>
  );
};

// class Action extends React.Component {
//    render () {
//     return(
//       <div>
//         <button 
//         onClick = {this.props.handlePick}
//         disabled={!this.props.hasOptions}
//         >
//         What should I do?
//         </button>
//       </div>

//     );
//   }
// }

class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      erorr: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(()=>({ error }));
      
    //old longer option to decribe an above function

      // this.setState(()=>{
      // return { error }; //in jsx 6 the same as 'error: error',//
      // });
    if(!error) {
      e.target.elements.option.value = '';
    }
  }
  render(){
      return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>ADD OPTION</button>
        </form>
      </div>
    );
  }
}
const Options = (props) => {
  return(
    <div>
      <button onClick={props.handleDeleteOptions}>REMOVE ALL</button>
      {props.options.length === 0 && <p>Please add option to get started.</p>}
      {
        props.options.map((option) => (
          <Option 
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption} 
          />
        ))
      }
     
    </div>
  );
};

// class Options extends React.Component {
//   render(){
//     return(
//       <div>
        
//         {
//           this.props.options.map((option) => 
//           <Option key={option} optionText={option} />)
//         }
//        <button onClick={this.props.handleDeleteOptions}>REMOVE ALL</button>
//       </div>

//     );
  
//   }
  
// }
const Option = (props) => {
  return(
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
        >
          Remove
      </button>
    </div>
  );
};


// class Option extends React.Component{
//   render(){
//     return(
//       <div>
//         <p>{this.props.optionText}</p>
//       </div>
//     );
//   }
// }

//  const User = (props) =>{
//    return(
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.ahe}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));











