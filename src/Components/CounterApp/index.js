import { Component} from "react";
import './index.css'

class CounterApp extends Component{

    state = {count:0}

    onDecrement=()=>{
        this.setState((prevstate=>({count:prevstate.count-1})));
    }
    onIncrease=()=>{
        this.setState((prevstate => ({count:prevstate.count+1})));
    }
    onreset=()=>{
        this.setState((prevstate=>({count:prevstate.count=0})))
    }
    render(){
        const {count}=this.state;
        return( 

        <div className="app-container">
                <div className="content-container">
                <h1 className="heading">Counter</h1>
                    <p className="counter">{count}</p>
                    <div>
                        <button className="decrease-button" type="button" onClick={this.onDecrement}>Decrease </button>
                        <button className="increase-button" type="button" onClick={this.onIncrease}>Increease</button>
                        <button className="reset-button" type="button" onClick={this.onreset}>Reset</button>
                    </div>
                </div>
        </div>)
    }
}

export default CounterApp