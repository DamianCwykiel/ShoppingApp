console.log('dziala!')

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handlerButtonVisible = this.handlerButtonVisible.bind(this);
        this.handlerButtonUnVisible = this.handlerButtonUnVisible.bind(this);
        this.state = {
            visibility: false,
            text: 'thus is the hidden text',
            
        };
    }
    handlerButtonVisible(){
        
        this.setState((prevState) => {
            return{
                
                visibility:  !prevState.visibility
            };
           
        })

    };
    handlerButtonUnVisible(){
        
        this.setState((prevState) => {
            return{
                
                visibility:  !prevState.visibility
            };
           
        })

    };
    
    render(){
        return ( 
            <div>
                
                <h1>Visibility {this.state.visibility}</h1>
                <button onClick={this.handlerButtonVisible}>{this.state.visibility ? 'ukryj' : 'pokaz'}</button>
                <button onClick={this.handlerButtonUnVisible}>{this.state.visibility ? 'ukryj' : 'pokaz'}</button>
                {this.state.visibility &&(
                    <div>
                        <h1>Thius is some hidden text</h1>
                    </div>
                )}
            </div>
        );
    }
    
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))












/*
const appBuilder = {
    title:'Toggler for builder',
    text: ' ',
};

const appRoot = document.getElementById('app');

let visibility = false;

const pokazText = () =>{
    visibility = !visibility;
    
    builder();
};

const builder = () => {
    const challenge = (
        <div>
            <h1>{appBuilder.title  ? appBuilder.title : 'nie ma tytulu?' }</h1>
            <button onClick={pokazText}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <p>{appBuilder.text.length > 0 ? 'Ukryty text. Teraz jest widoczny!: ' 
                : 'gdzie jest text?'}</p>
            )}
        
        </div>

    )

    ReactDOM.render(challenge, appRoot);
};

builder();

*/
