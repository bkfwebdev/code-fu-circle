import React, { Component } from 'react';
class AppHeader extends Component {
  render() {
    return (
      <div className = "MyHeader">

        <div className = "Logo">
          <div className = "Circle-Container">
            <h1 className = "Code-Fu-C">C</h1>
          </div>
            <ul className = "LogoText">
              <li><h1 className = "CompanyName">Code-Fu Circle</h1></li>
              <li><p className = "TagLine">Small Business Software Solutions</p></li>
            </ul>
          </div>
      
      </div>
    );
  }
}

export default AppHeader;
