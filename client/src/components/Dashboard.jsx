import React from 'react';
import {Link} from 'react-router-dom';
import MessageList from './messages/MessageList';

const Dashboard = () => {
    return(
        <div>
            <MessageList/>
            <div className="fixed-action-btn">
                <Link to="/create" className="btn-floating btn-large red">
                    <i class="material-icons">add</i>
                </Link>

            </div>
        </div>);
}; 
export default Dashboard; 