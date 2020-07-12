
import React , {Component} from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import { fetchUser } from '../actions';



class Login extends Component{

    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
        <div>
            <form>
            <div>
              <h2 className =".text-primary">Login</h2>
            </div>  
            <div class="form-group">
              <label for="formGroupExampleInput">User Name:</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Insert User Name"/>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Password:</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Insert Password"/>
            </div>
          </form>
            <botton className="btn btn-primary" type="submit">login</botton>
        </div>);
    }
}



function mapStateToProps({user}){
    return {user};

}

export default connect(mapStateToProps,{fetchUser})(Login);