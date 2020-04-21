import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Products from './components/products/Products';


ReactDOM.render(
  <div className="">
    <div className="header">
      <h1 className="h1"> React Demo Site</h1>
      <div className="buttons">
      <Nav/>
      </div>
    </div>
    <Home/>
    <About/>
    <Products/>
  </div>,
  document.getElementById('root'));
