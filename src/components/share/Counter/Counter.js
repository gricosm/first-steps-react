import { Component } from "react";

class Counter extends Component{
    constructor(props) { 
        super(props);
        this.state = { count:50 };
        this.props = props 
    }
    increment(){
        this.setState({ count: this.state.count + this.props.numberIncrement });
    }
    decrement(){
        this.setState({ count: this.state.count - this.props.numberDecrement });
    }
    render(){
        return(
            <div>
                <button onClick={() =>this.decrement()}>Decrementar</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.increment()}>Incrementar</button>
            </div> 
        );
    }
}

export default Counter;