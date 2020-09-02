import React , {Component} from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            default:
                return [<li key = "1" className = "nav-item" component = {Login} ><Link className="nav-link active" to = '/login'>Login</Link></li>,
                        <li key="2" className = "nav-item" component = {Register}><Link className="nav-link active"
                         to = '/register'>Register</Link></li>];
            case true:
                return (<li><Link className="nav-link active" to = '/' className = "nav-item active">Logout</Link></li>);


        }
    }
    render(){
        return(
                        <ul className="nav justify-content" style={{height: 20,fontSize:30}}>
                            <li className="nav-item font-weight-bold" style={{backgroundColor:'rgb(227, 242, 253)'}} >
                                <Link className ="navbar-brand text-primary text-black-50" style={{height: 25,fontSize:35,border:4,backgroundSize:8 ,margin:5}} to={this.props.auth ? '/messages' : '/login'} 
                            >   
                                Emaily</Link></li>
                            {this.renderContent()}
                      </ul>
        );
    }
}

function mapStateToProps({auth}){
    return {auth};
}

export default connect(mapStateToProps)(Header);