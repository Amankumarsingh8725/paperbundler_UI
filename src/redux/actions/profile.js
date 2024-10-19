import {server} from '../store.js';
import axios from 'axios';


export const updateProfile=(name,email)=>async(dispatch)=>{
    try
    {
        dispatch({type:"updateProfileRequest"});

        const {data}=await axios.put(`${server}/api/v1/updateprofile`,{name,email},
        {
            headers:{
                'Content-Type':'application/json',
            },
            withCredentials:true,
        })
        dispatch({type:"updateProfileSuccess",payload:data.message });
    }
    catch(error)
    {
        dispatch({type:"updateProfileFailure",
        payload:error.respose.data.message,})

    }
}

export const updateProfilePicture=(formdata)=>async(dispatch)=>{
    try
    {
        dispatch({type:"updateProfilePictureRequest"});

        const {data}=await axios.put(`${server}/api/v1/updateprofilepicture`,formdata,
        {
            headers:{
                'Content-Type':'mulripart/form-data',
            },
            withCredentials:true,
        })
        dispatch({type:"updateProfilePictureSuccess",payload:data.message });
    }
    catch(error)
    {
        dispatch({type:"updateProfilePictureFailure",
        payload:error.respose.data.message,})

    }
}


export const changePassword=(oldpassword,newpassword)=>async(dispatch)=>{
    try
    {
        dispatch({type:"changePasswordRequest"});

        const {data}=await axios.put(`${server}/api/v1/changepassword`,{oldpassword,newpassword},
        {
            headers:{
                'Content-Type':'application/json',
            },
            withCredentials:true,
        })
        dispatch({type:"changePasswordSuccess",payload:data.message });
    }
    catch(error)
    {
        dispatch({type:"changePasswordFailure",
        payload:error.response.data.message,})

    }
}


export const forgetPassword=(email)=>async(dispatch)=>{
    try
    {
        dispatch({type:"forgetPasswordRequest"});

        const {data}=await axios.post(`${server}/api/v1/forgetpassword`,{email},
        {
            headers:{
                'Content-Type':'application/json',
            },
            withCredentials:true,
        })
        dispatch({type:"forgetPasswordSuccess",payload:data.message });
    }
    catch(error)
    {
        dispatch({type:"forgetPasswordFailure",
        payload:error.response.data.message,})

    }
}


export const resetPassword=(token,password)=>async(dispatch)=>{
    try
    {
        dispatch({type:"resetPasswordRequest"});

        const {data}=await axios.put(`${server}/api/v1/resetpassword/${token}`,{token,password},
        {
            headers:{
                'Content-Type':'application/json',
            },
            withCredentials:true,
        })
        dispatch({type:"resetPasswordSuccess",payload:data.message });
    }
    catch(error)
    {
        dispatch({type:"resetPasswordFailure",
        payload:error.response.data.message,})

    }
}