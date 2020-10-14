import React, { Component } from 'react';

class Counter extends Component {
    state= {
        count: 2,
        tags: ['tag1', 'tag2', 'tag3']
    }
   
    render() { 
        return (
        <React.Fragment>
            <span className={ this.getspanClasses() }>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <ul>{this.state.tags.map(tag => <li>{tag}</li>)}</ul>
        </React.Fragment>
        );
    }
    getspanClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h4>Zero</h4> : count;
    }
}
 
export default Counter;