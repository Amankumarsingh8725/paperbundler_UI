import { createReducer } from '@reduxjs/toolkit'

export const authReducer = createReducer({}, (builder) => {
  builder
    .addCase('addLabfileRequest', (state) => { state.loading = true; })
    .addCase('addLabfileSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('addLabfileFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


    .addCase('addQuestionpaperRequest', (state) => { state.loading = true; })
    .addCase('addQuestionpaperSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('addQuestionpaperFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


    .addCase('getallUserRequest', (state) => { state.loading = true; })
    .addCase('getallUserSuccess', (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase('getallUserFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    
    .addCase('changeUserroleRequest', (state) => { state.loading = true; })
    .addCase('changeUserroleSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('changeUserroleFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


    .addCase('deleteUserRequest', (state) => { state.loading = true; })
    .addCase('deleteUserSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('deleteUserFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase('deleteLabfileRequest', (state) => { state.loading1 = true; })
    .addCase('deleteLanfileSuccess', (state, action) => {
      state.loading1 = false;
      state.message = action.payload;
    })
    .addCase('deleteLabfileFailure', (state, action) => {
      state.loading1 = false;
      state.error = action.payload;
    })

    .addCase('deletePaperRequest', (state) => { state.loading1 = true; })
    .addCase('deletePaperSuccess', (state, action) => {
      state.loading1 = false;
      state.message = action.payload;
    })
    .addCase('deletePaperFailure', (state, action) => {
      state.loading1 = false;
      state.error = action.payload;
    })



    .addCase('getAdminStatsRequest', (state) => { state.loading = true; })
    .addCase('getAdminStatsSuccess', (state, action) => {
      state.loading = false;
      state.stats = action.payload.stats;
      state.totalviewscount = action.payload.totalviewscount;
      state.usercount = action.payload.usercount;
      state.usersProfit = action.payload.usersProfit;
      state.totalviewsProfit = action.payload.totalviewsProfit;
      state.usersPercentage = action.payload.usersPercentage;
      state.totalviewsPercentage = action.payload.totalviewsPercentage;

    })
    .addCase('getAdminStatsFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    


    .addCase('clearError', (state) => { state.error = null; })
  .addCase('clearMessage', (state) => { state.message = null; });

});