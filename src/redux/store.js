import {configureStore} from "@reduxjs/toolkit";
import { profileReducer, userReducer } from "./reducers/userReducer.js";
import { questionpaperReducer } from "./reducers/questionpaperReducer.js";
import { labfileReducer } from "./reducers/labfileReducer.js";
import { authReducer } from "./reducers/authReducer.js";

// export const server= 'https://paperbundler.onrender.com';
export const server= 'https://paperbundlerserver.up.railway.app';


const store = configureStore({
    reducer:{
        user:userReducer,
        profile: profileReducer,
        questionpaper:questionpaperReducer,
        labfile:labfileReducer,
        auth:authReducer,
    },
});

export default store;