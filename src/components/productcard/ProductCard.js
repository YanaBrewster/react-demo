import React from 'react';

class ProductCard extends React.Component{
  render(){
    return(
      <div className="card col-3 col-lg-3 text-info my-2 mx-2>
        <img src={this.props.imgurl} className="card-img-top" alt="Wine" />
        <div className="card-body">
          <h5 className="card-title">{this.props.tit}</h5>
          <p className="card-text">{this.props.des} </p>
          <button className="btn btn-primary">View more</button>
        </div>
      </div>

    )
  }
}

export default ProductCard;
