import React,{Component} from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Dashboard from './Dashboard';
import MessageNew from './messages/MessageNew';
import Login from './Login';


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();

    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Header/>
                        <Route exact path='/login' component = {Login}/>
                        <Route exact path='/messages' component = {Dashboard}/>
                        <Route exact path='/create' component = {MessageNew}/>

                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default connect(null,actions)(App);