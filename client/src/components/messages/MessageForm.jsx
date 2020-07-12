import _ from 'lodash';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {reduxForm , Field} from  'redux-form';
import MessageField from './MessageField';
import validateEmails from '../../utils/validateEmails';
import  formFields from './formFields';

class MessageForm extends Component{
    renderFields(){
    return _.map(formFields,({label,name}) => {
        return <Field 
                key = {name}
                component={MessageField}
                type="text" 
                label = {label} 
                name={name}
                />
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onMessageSubmit)}>
                    {this.renderFields()}
                    <Link to="/messages" className="red btn-flat white-text">
                        Cancel
                    </Link>                    
                
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
            
        );
    }
       
}
function validate(values){
    const errors={};
    errors.recipients = validateEmails(values.recipients || '');
    _.each(formFields,({name})=>{
        if(!values[name]){
            errors[name]='You must provide a value';
        }
    });
    return errors;
    
}
export default reduxForm({
    validate,
    form: 'messageForm',
    destroyOnUnmount:false
})(MessageForm); 