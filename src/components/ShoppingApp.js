 import React from 'react';
 import AddOption from './AddOption';
 import Header from './Header';
 import Action from './Action.js';
 import Options from './Options';
 import OptionModal from './OptionModal';

export default class ShoppingApp extends React.Component {
    state = {
      options: [],
      selectedOption: undefined
    };

    // constructor(props){
    //   super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //       options: []
    //     };
    // }

    handleDeleteOptions = () => {
      this.setState(() => ({options: [] }));

      //old longer option to decribe an above function
        
      // this.setState(()=>{
      //   return{
      //      options: []
      //    };
      // });  
    };

    handlerClearSelectedOption = () => {
      this.setState(() => ({selectedOption: undefined }));
    };
    handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option)=> optionToRemove !== option)
        //return optionToRemove !== option;
      }));
    };

    handlePick = () => {
      const randomNumb = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNumb];
      //alert(option);
      this.setState(() => ({
        selectedOption: option
      }));
    };

    handleAddOption = (option) => {
      if(!option){
        return 'Enter the valid value to add an item!';
      }else if (this.state.options.indexOf(option) > -1){
        return'This option already exists!';
      };

      this.setState((prevState) => ({ options: prevState.options.concat(option) }));
        
      //old longer option to decribe an above function

      // this.setState((prevState) => {
      //   return {
      //     options: prevState.options.concat(option)
      //   }
        
      // });
    };

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

  render() {
    //const title = 'Independion';
    const subtitle = 'Make your shopping list open everywhere!';
    //const options = ['thing one', 'thing two', 'thisng tree'];
       return (
      <div>
        <Header subtitle={subtitle} />
          <div className="container">
            <Action 
              hasOptions={this.state.options.length > 0}
              handlePick={this.handlePick}
            />
              <div className="widget">
                <Options 
                  options= {this.state.options} 
                  handleDeleteOptions={this.handleDeleteOptions}
                  handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                  handleAddOption={this.handleAddOption}
                />
              </div>
            </div>
          <OptionModal 
            selectedOption={this.state.selectedOption}
            handlerClearSelectedOption={this.handlerClearSelectedOption}
          />
        </div>
    );
  }
}
