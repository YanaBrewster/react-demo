import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';

class Modal extends React.Component{
  close = () =>{
    ReactDOM.render(<App/>, document.getElementById('root'));
  }

  render(){
    console.log('Modal');
    return(
      <div>
        <div className="modal-footer mt-5">
          <button type="button" className="btn btn-secondary mr-5" data-dismiss="modal" onClick={this.close}>Close</button>
        </div>

        <h5 className="modal-title text-center display-1">{this.props.title}</h5>
        <div className="modal-body">
          <img src={this.props.img} alt="Wine" className="img-thumbnail m-auto d-block" />
        </div>

        <p className="text-center display-4">{this.props.description}</p>

      </div>
    )
  }
}

export default Modal;
