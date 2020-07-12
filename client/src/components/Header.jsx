import React , {Component} from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

class Header extends Component{
    renderContent(){
        switch(this.props.username){
            case null:
                return;
            case false:
                return [<li key = "1" Component = {Login} ><Link to = '/login'>Login</Link></li>,
                        <li key="2" Component = {Register}><Link to = '/register'>Register</Link></li>];
            default:
                return (<li><Link to = '/'>Logout</Link></li>);


        }
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link 
                    to={this.props.username ? '/messages' : '/login'}
                     className="left brand-logo">
                        Emaily
                    </Link>
                    <ul className="right">
                      {this.renderContent()}

                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}){
    return {auth};
}

export default connect(mapStateToProps)(Header);