import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {

    render() { 
       const { onDecrement, onIncrement, onDelete, onReset} = this.props;
        return ( 
        <div>
            <button onClick={this.props.onReset} className="btn btn-primary btn-small m-2">Reset</button>
            { this.props.counters.map(counter => 
            <Counter 
            key={counter.id} 
            onIncrement = {onIncrement}
            onDecrement = {onDecrement}
            onDelete = {onDelete}
            onReset = {onReset}
            counter = {counter}/>
            )}
        </div> );
    }
}
 
export default Counters;