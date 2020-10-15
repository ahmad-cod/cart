import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
        <div>
            <span className={ this.getspanClasses() }>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm m-2" 
            onClick={ () => { this.props.onIncrement(this.props.counter) }}>Increment +</button>
            <button 
            className="btn btn-secondary btn-sm m-2"
            onClick={ () => {this.props.onDecrement(this.props.counter) }}>Decrement --</button>
            <button 
              className="btn btn-danger m-2"
              onClick={ () => this.props.onDelete(this.props.counter.id) }>Delete</button>     
        </div>
        );
    }
    
    getspanClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning btn-sm" : "primary btn-md";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? <h4>Zero</h4> : count;
    }
}
 
export default Counter;