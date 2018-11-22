import React, { Component } from 'react';
import AppHeader from "./components/AppHeader";
import JumboImage from "./components/JumboImage";
import GetInTouch from "./components/GetInTouch";
import "./styles/code-fu-style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <JumboImage/>
        <GetInTouch/>
      </div>
      
    );
  }
}

export default App;
