import React from 'react';
import ReactDOM from 'react-dom';
import './Nav.css';
import Home from '../home/Home';
import About from '../about/About';
import Products from '../products/Products';
import Contact from '../contact/Contact';

class Nav extends React.Component{

home = () => {
  console.log('Home');
  const homeSection = (
      <div>
        <div className="header">
          <h1 className="h1"> React Demo </h1>
            <div className="buttons">
            <Nav/>
            </div>
          </div>
        <Home/>
      </div>
  )

  ReactDOM.render(homeSection,document.getElementById('root'));
}
about = () => {
  console.log('About');
  const aboutSection = (
      <div>
        <div className="header">
        <h1 className="h1"> React Demo </h1>
          <div className="buttons">
          <Nav/>
          </div>
        </div>
      <About/>
    </div>
  )
    ReactDOM.render(aboutSection,document.getElementById('root'));
}
products = () => {
  console.log('Products');
  const productsSection = (
      <div>
        <div className="header">
          <h1 className="h1"> React Demo </h1>
            <div className="buttons">
            <Nav/>
            </div>
          </div>
            <h1 className="heading"> Projects </h1>
        <Products/>
      </div>
  )

  ReactDOM.render(productsSection,document.getElementById('root'));
}
contact = () => {
  console.log('Contact');
  const contactSection = (
      <div>
        <div className="header">
        <h1 className="h1"> React Demo </h1>
          <div className="buttons">
          <Nav/>
          </div>
        </div>
      <Contact/>
    </div>
  )
    ReactDOM.render(contactSection,document.getElementById('root'));
}
render(){
  return(
    <div>
    {}
    <button className="home" onClick={this.home}> Home</button>
    <button className="about" onClick={this.about}>About</button>
    <button className="products" onClick={this.products}>Products</button>
    <button className="contact" onClick={this.contact}>Contact</button>
    </div>
  )
}
}

export default Nav;
