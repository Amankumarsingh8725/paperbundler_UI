import {server} from '../store.js';
import axios from 'axios';


export const login = (email,password) => async(dispatch) => {
    try{
        dispatch({type:'loginRequest'});
        const {data} = await axios.post(`${server}/api/v1/login`, {email, password},
        {
            headers:{
                'Content-Type':'application/json',
            },
            withCredentials:true,
        });
        console.log(data);
        dispatch({type:'loginSuccess',payload:data});
    }

    catch(error){
        dispatch({type:'loginFailure',payload:error.response.data.message});
    }
}


export const regsister = (formdata) => async(dispatch) => {
    try{
        dispatch({type:'regsisterRequest'});
        const {data} = await axios.post(`${server}/api/v1/register`,formdata,
        {
            headers:{
                'Content-Type':'mulripart/form-data',
            },
            withCredentials:true,
        });
        console.log(data);
        dispatch({type:'regsisterSuccess',payload:data});
    }

    catch(error){
        dispatch({type:'regsisterFailure',payload:error.response.data.message});
    }
}




export const loadUser = () => async(dispatch) => {
    try{
        dispatch({type:'loadUserRequest'});
        const {data} = await axios.get(`${server}/api/v1/getprofile`,
        {
            withCredentials:true,
        });
        console.log(data);
        dispatch({type:'loadUserSuccess',payload:data.user});
    }

    catch(error){
        dispatch({type:'loadUserFailure',payload:error.response.data.message});
    }
}

export const logout = () => async(dispatch) => {
    try{
        dispatch({type:'logoutRequest'});
        const {data} = await axios.get(`${server}/api/v1/logout`,
        {
            withCredentials:true,
        });
        console.log(data);
        dispatch({type:'logoutSuccess',payload:data.message});
    }

    catch(error){
        dispatch({type:'logoutFailure',payload:error.response.data.message});
    }
}

export const contact = (name,email,message) => async(dispatch) => {
    try{
        dispatch({type:'contactRequest'});
        const {data} = await axios.post(`${server}/api/v1/contact`, {name, email, message},
        {
            headers:{
                'Content-Type':'application/json',
            },
            withCredentials:true,
        });
        dispatch({type:'contactSuccess',payload:data.message});
    }

    catch(error){
        dispatch({type:'contactFailure',payload:error.response.data.message});
    }
}