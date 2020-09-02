
import React , {Component} from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import { fetchUser } from '../actions';



class Login extends Component{

    componentDidMount(){
        this.props.fetchUser();
    }
    
    handleSubmit(event) {
      event.preventDefault();

      this.setState({ submitted: true });
      const { user } = this.state;
      if (user.firstName && user.lastName && user.username && user.password) {
          this.props.register(user);
      }
  }



    render(){
        return(
        <div>
          <br/>
          <br/>
            <form  onSubmit={this.handleSubmit}>
            <div>
              <h1 className ="text-primary">Login</h1>
              <br/>
            </div>  
            <div class="form-group">
              <label for="formGroupExampleInput">User Name:</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="User Name"/>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Password:</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Password"/>
            </div>
          </form>
            <botton className="btn btn-primary" type="submit" 
            >Login</botton>
        </div>);
    }
}



function mapStateToProps({user}){
    return {user};

}

export default connect(mapStateToProps,{fetchUser})(Login);