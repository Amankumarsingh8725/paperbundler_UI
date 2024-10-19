import { createReducer } from '@reduxjs/toolkit'


export const labfileReducer = createReducer({labfiles:[]}, (builder) => {

    builder
    .addCase('allLabfileRequest', (state) => { state.loading = true; })
    .addCase('allLabfileSuccess', (state, action) => {
      state.loading = false;
      state.labfiles=action.payload;
    })
    .addCase('allLabfileFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

});