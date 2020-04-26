import React, {Component} from 'react';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state ={
      username : '',
      email:  '',
      password: ''
    };
  }
  changeEvent=(e)=>{
    e.preventDefault();
    const { value, name } = e.target
    this.setState({
    [name]:value
  });

  }
  onSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);

    }
  render() {
    return (
      <div>
      <h2 className="text-center mt-4">Contact Us</h2>
        <form onSubmit = {this.onSubmit}  className="container mt-5 col-6 col-md-6 col-lg-6" >
          <label> Username: </label>
          <input className="form-control mt-2 mb-3" onChange={this.changeEvent} type="text" name="username" value={this.state.username}/>
          <label> Email: </label>
          <input className="form-control mt-2 mb-3" onChange={this.changeEvent} type="email" name="email" value={this.state.email}/>
          <label> Password: </label>
          <input className="form-control mt-2 mb-3" onChange={this.changeEvent} type="password" name="password" value={this.state.password}/>
          <input className="form-control mt-5 mb-5 btn btn-primary" type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default Contact;
