import React from 'react';


export default class AddOption extends React.Component{
    state = {
      error: undefined
    };
  // constructor(props){
  //     super(props);
  //     this.handleAddOption = this.handleAddOption.bind(this);
      // this.state = {
      //   erorr: undefined
      // };
    
    handleAddOption = (e) => {
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
    };
    render(){
        return(
        <div>
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form className ="add-option" onSubmit={this.handleAddOption}>
            <input className="add-option__input" type="text" name="option"/>
            <button className="button">Add Item</button>
          </form>
        </div>
      );
    }
  }
 
  
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
  
  
  
  // class Option extends React.Component{
  //   render(){
  //     return(
  //       <div>
  //         <p>{this.props.optionText}</p>
  //       </div>
  //     );
  //   }
  // }