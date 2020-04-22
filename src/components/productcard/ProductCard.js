import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../modal/Modal';



class ProductCard extends React.Component{

  modal = ()=>{
    const modalContent=(
      <Modal title={this.props.tit} description={this.props.des} img={this.props.imgurl}/>
    )
    ReactDOM.render(modalContent,document.getElementById('root'));

  }

  render(){
    return(
      <div className="card col-6 text-info my-5" style={{width: '18rem'}}>
        <img src={this.props.imgurl} className="card-img-top" alt="Wine" />
        <div className="card-body">
          <h5 className="card-title">{this.props.tit}</h5>
          <p className="card-text">{this.props.des} </p>
          <button className="btn btn-primary" onClick={this.modal}>View more</button>
        </div>
      </div>
    )
  }
}

export default ProductCard;
