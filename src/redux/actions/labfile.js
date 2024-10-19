import {server} from '../store.js';
import axios from 'axios';


export const getAllLabfiles=(semester='',keyword='')=>async(dispatch)=>{
    try
    {
        dispatch({type:"allLabfileRequest"});

        const {data}=await axios.get(`${server}/api/v1/labfile?semester=${semester}&keyword=${keyword}`, {
            withCredentials:true,
        })
        dispatch({type:"allLabfileSuccess",payload:data.labfiles });
    
    }
    catch(error)
    {
        dispatch({type:"allLabfileFailure",
        payload:error.respose.data.message,})

    }
}