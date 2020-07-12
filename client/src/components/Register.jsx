
import React , {Component} from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import { newUser } from '../actions';


class Register extends Component{

    render(){
        return(
        <div>
            <form>
            <div class="form-group">
              <label for="formGroupExampleInput">User Name:</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="User Name"/>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Password:</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Paswword"/>
            </div>
          </form>
            <botton className="btn btn-primary" type="submit">Register</botton>
        </div>);
    }
}



function mapStateToProps({user}){
    return {user};

}

export default connect(mapStateToProps,{newUser})(Register);