import React, { Component } from 'react';
class MenuSelect extends Component {
  render() {
    return (
      <div className = "MenuSelect">
        <nav class="navbar navbar-inverse">
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><button>Home</button></li>
              <li><button>Social Media Management</button></li>
              <li><button>Search Engine Optimization</button></li> 
              <li><button>Interactive Landing Pages</button></li>
              <li><button>Progressive Web Apps</button></li> 
            </ul> 
          </div>
        </nav>
     </div>

    );
  }
}

export default MenuSelect;