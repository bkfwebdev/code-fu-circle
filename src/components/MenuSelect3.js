import React, { Component } from 'react';
class MenuSelect2 extends Component {
  render() {
    return (
      <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      
    </div>
    <div class="collapse navbar-collapse navbar-custom" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">About Us</a></li>
        <li><a href="#">Search Engine Optimization</a></li>
        <li><a href="#">Interactive Landing Pages</a></li> 
        <li><a href="#">Progressive Web Apps</a></li>
        <li><a href="#">Social Media Management</a></li> 
        <li><a href="#">Get In Touch</a></li>
      </ul>
    </div>
  </div>
</nav>

    );
  }
}

export default MenuSelect2;