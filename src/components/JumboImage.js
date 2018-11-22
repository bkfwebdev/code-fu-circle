import React, { Component } from 'react';
import WhatIsCodeFu from "./WhatIsCodeFu";
import ServicesOffered from "./ServicesOffered";
class JumboImage extends Component {
  render() {
    return (
      <div className = "JumboImage">
      <WhatIsCodeFu/>
      <ServicesOffered/>
      </div>
    );
  }
}

export default JumboImage;