import React, { Component } from "react";
 
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
            <h1>Total Items <span className="badge badge-secondary">Navbar</span></h1>
        </nav>
      </React.Fragment>
    );
  }
}
 
export default NavBar;