import React, { Component } from 'react'

class NavBar extends Component {
    render() { 
        return ( 
            <div>
                <nav class="navbar navbar-light bg-light">
                    <span class="navbar-brand mb-0 h1">No. of Carts stocked:{" "}
                    <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
                    </span>
                </nav>
            </div>
         );
    }
}
 
export default NavBar;