import {server} from '../store.js';
import axios from 'axios';


export const getAllQuestionpapers=(category='',semester='',keyword='')=>async(dispatch)=>{
    try
    {
        dispatch({type:"allQuestionpaperRequest"});

        const {data}=await axios.get(`${server}/api/v1/questionpaper?keyword=${keyword}&category=${category}&semester=${semester}`,
        {
            withCredentials:true,
        })
        dispatch({type:"allQuestionpaperSuccess",payload:data.questionpapers });
    
    }
    catch(error)
    {
        dispatch({type:"allQuestionpaperFailure",
        payload:error.respose.data.message,})

    }
}