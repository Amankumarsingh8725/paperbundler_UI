import {server} from '../store.js';
import axios from 'axios';

export const addLabfile = (formdata) => async(dispatch) => {
    try{
        dispatch({type:'addLabfileRequest'});
        const {data} = await axios.post(`${server}/api/v1/addlabfile`,formdata,
        {
            headers:{
                'Content-Type':'mulripart/form-data',
            },
            withCredentials:true,
        });
        console.log(data);
        dispatch({type:'addLabfileSuccess',payload:data.message});
    }

    catch(error){
        dispatch({type:'addLabfileFailure',payload:error.response.data.message});
        console.log(error.response.data.message)
    }
}


export const addQuestionpapers = (formdata) => async(dispatch) => {
    try{
        dispatch({type:'addLabfileRequest'});
        const {data} = await axios.post(`${server}/api/v1/addquestionpaper`,formdata,
        {
            headers:{
                'Content-Type':'mulripart/form-data',
            },
            withCredentials:true,
        });
        console.log(data);
        dispatch({type:'addLabfileSuccess',payload:data.message});
    }

    catch(error){
        dispatch({type:'addLabfileFailure',payload:error.response.data.message});
        console.log(error.response.data.message)
    }
}

export const getAllUsers=()=>async(dispatch)=>{
    try
    {
        dispatch({type:"getallUserRequest"});

        const {data} = await axios.get(`${server}/api/v1/admin/users`,
        {
            withCredentials:true,
        });
        dispatch({type:"getallUserSuccess",
        payload:data.users });
    
    }
    catch(error)
    {
        dispatch({type:"getallUserFailure",
        payload:error.respose.data.message,})

    }
}


export const deleteUser=(userid)=>async(dispatch)=>{
    try
    {
        dispatch({type:"deleteUserRequest"});

        const {data}=await axios.delete(`${server}/api/v1/admin/user/${userid}`,
        {
            withCredentials:true,
        });
        dispatch({type:"deleteUserSuccess",payload:data.message });
    
    }
    catch(error)
    {
        dispatch({type:"deleteUserFailure",
        payload:error.response.data.message,})

    }
}

export const changeRole=(userid)=>async(dispatch)=>{
    try
    {
        dispatch({type:"changeUserroleRequest"});

        const {data}=await axios.put(`${server}/api/v1/admin/user/${userid}`,{},
        {
            withCredentials:true,
        });
        dispatch({type:"changeUserroleSuccess",payload:data.message });
    
    }
    catch(error)
    {
        dispatch({type:"changeUserroleFailure",
        payload:error.response.data.message,})
    }
}

export const deleteLabfile=(fileid)=>async(dispatch)=>{
    try
    {
        dispatch({type:"deleteLabfileRequest"});

        const {data}=await axios.delete(`${server}/api/v1/deletelabfile/${fileid}`,
        {
            withCredentials:true,
        });
        dispatch({type:"deleteLanfileSuccess",payload:data.message });
    
    }
    catch(error)
    {
        dispatch({type:"deleteLabfileFailure",
        payload:error.response.data.message,})
    }
}


export const deletePaper=(paperid)=>async(dispatch)=>{
    try
    {
        dispatch({type:"deletePaperRequest"});

        const {data}=await axios.delete(`${server}/api/v1/deletequestionpaper/${paperid}`,
        {
            withCredentials:true,
        });
        dispatch({type:"deletePaperSuccess",payload:data.message });
    
    }
    catch(error)
    {
        dispatch({type:"deletePaperFailure",
        payload:error.response.data.message,})
    }
}

export const getDashboardStats=()=>async(dispatch)=>{
    try
    {
        dispatch({type:"getAdminStatsRequest"});

        const {data}=await axios.get(`${server}/api/v1//admin/stats`,
        {
            withCredentials:true,
        });
        dispatch({type:"getAdminStatsSuccess",payload:data });
    
    }
    catch(error)
    {
        dispatch({type:"getAdminStatsFailure",
        payload:error.response.data.message,})

    }
}