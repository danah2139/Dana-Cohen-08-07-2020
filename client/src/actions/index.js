import axios from 'axios';
import {FETCH_USER,FETCH_MESSAGES} from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/login');
    dispatch({ type: FETCH_USER, payload:res.data});    
    
};


export const newUser = () => async dispatch => {
    const res = await axios.post('/register',values);
    dispatch({ type: FETCH_USER, payload:res.data});    
    
};

export const sendMessage = (values,history) => async dispatch =>{
    const res = await axios.post('/create',values);
    history.push('/create');
    dispatch({type:FETCH_USER ,payload:res.data});

};

export const deleteMessage = (values,history) => async dispatch =>{
    const res = await axios.post('/messages',values);
    history.push('/messages');
    dispatch({type:FETCH_USER ,payload:res.data});

};

export const fetchMessages = () => async dispatch => {
    const res = await axios.get('/messages');
    dispatch({type:FETCH_MESSAGES ,payload:res.data});


};