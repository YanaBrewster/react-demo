import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Products from './components/products/Products';


class App extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="header">
          <h1 className="h1"> React Demo Site</h1>
          <div className="buttons">
            <Nav/>
          </div>
        </div>
        <Home/>
        <About/>
        <Products/>
      </div>
    )
  }
}
export default App;
