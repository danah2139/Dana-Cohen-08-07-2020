
import React,{Component} from 'react';
import {connect} from 'react-redux';
import { fetchMessages } from '../../actions';
import Message from './Message';
import {Tabs,TabLink,TabContent} from 'react-tabs-redux';

class MessageList extends Component{
    componentDidMount(){
        this.props.fetchMessages();
    }

    //state = this.props.messages;

    
    deleteMessage = index => {
        const newInventory = this.props.messages.filter(
          (message, messageIndex) => index !== messageIndex
        );    return this.setState([...newInventory]);
    };
    
    renderMessages(){
        return this.state.reverse().map(message => (
            < Message key = {message._id} onDelete= {this.deleteMessage} message={message}/> 
        ));
    }
    render(){
        return(
            <div>
                <Tabs className="nav nav-tabs">
                    <TabLink to="tab1" > Send messages </TabLink>
                    <TabLink to="tab2" > Recieve Messages </TabLink>
                    
                    <TabContent for="tab1" >{this.renderMessages()}</TabContent>
                    <TabContent for="tab2" >{this.renderMessages()}</TabContent>
                </Tabs>
            </div>
        );
    }
}

function mapStateToProps({messages}){
    return {messages};

}

export default connect(mapStateToProps,{fetchMessages})(MessageList);
