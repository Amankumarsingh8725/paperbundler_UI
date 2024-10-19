import { createReducer } from '@reduxjs/toolkit'

export const userReducer = createReducer({}, (builder) => {
  builder
    .addCase('loginRequest', (state) => { state.loading = true; })
    .addCase('loginSuccess', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    })
    .addCase('loginFailure', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      // state.user = action.payload.user;
      state.error = action.payload;
    })

    .addCase('regsisterRequest', (state) => { state.loading = true; })
    .addCase('regsisterSuccess', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    })
    .addCase('regsisterFailure', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = action.payload.user;
      state.error = action.payload;
    })

    .addCase('logoutRequest', (state) => { state.loading = true; })
    .addCase('logoutSuccess', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload;
    })
    .addCase('logoutFailure', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    })

    .addCase('loadUserRequest', (state) => { state.loading = true; })
    .addCase('loadUserSuccess', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase('loadUserFailure', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })


    .addCase("contactRequest",(state)=>{
      state.loading=true;
    })
    .addCase("contactSuccess",(state,action)=>{
      state.loading=false;
      state.message = action.payload;
    })
    .addCase("contactFailure",(state,action)=>{
      state.loading=false;
      state.error=action.payload;
    })


    .addCase('clearError', (state) => { state.error = null; })
    .addCase('clearMessage', (state) => { state.message = null; });
});


export const profileReducer = createReducer({}, (builder) => {

  builder
  .addCase("updateProfileRequest",(state)=>{
    state.loading=true;
  })
  .addCase("updateProfileSuccess",(state,action)=>{
    state.loading=false;
    state.message=action.payload;
  })
  .addCase("updateProfileFailure",(state,action)=>{
    state.loading=false;
    state.error=action.payload;
  })

  .addCase("changePasswordRequest",(state)=>{
    state.loading=true;
  })
  .addCase("changePasswordSuccess",(state,action)=>{
    state.loading=false;
    state.message=action.payload;
  })
  .addCase("changePasswordFailure",(state,action)=>{
    state.loading=false;
    state.error=action.payload;
  })

  .addCase("updateProfilePictureRequest",(state)=>{
    state.loading=true;
  })
  .addCase("updateProfilePictureSuccess",(state,action)=>{
    state.loading=false;
    state.message=action.payload;
  })
  .addCase("updateProfilePictureFailure",(state,action)=>{
    state.loading=false;
    state.error=action.payload;
  })



  .addCase("forgetPasswordRequest",(state)=>{
    state.loading=true;
  })
  .addCase("forgetPasswordSuccess",(state,action)=>{
    state.loading=false;
    state.message=action.payload;
  })
  .addCase("forgetPasswordFailure",(state,action)=>{
    state.loading=false;
    state.error=action.payload;
  })



  .addCase("resetPasswordRequest",(state)=>{
    state.loading=true;
  })
  .addCase("resetPasswordSuccess",(state,action)=>{
    state.loading=false;
    state.message=action.payload;
  })
  .addCase("resetPasswordFailure",(state,action)=>{
    state.loading=false;
    state.error=action.payload;
  })



  .addCase('clearError', (state) => { state.error = null; })
  .addCase('clearMessage', (state) => { state.message = null; });

});