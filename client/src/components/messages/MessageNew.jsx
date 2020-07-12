import React , { Component } from 'react';
import {reduxForm} from 'redux-form';
import MessageForm from './MessageForm';
import MessageFormReview from './MessageFormReview';

class MessageNew extends Component{   
    state = {showFormReview:false};
    renderContent(){
        if(this.state.showFormReview){
            return <MessageFormReview 
                    onCancel={() => this.setState({showFormReview:false})}/>;
        }
        return <MessageForm 
                onMessageSubmit = {() => this.setState({showFormReview:true})}
                />
    }
    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    }
}
export default reduxForm({
    form:'MessageForm'
}) (MessageNew); 
