import { createReducer } from '@reduxjs/toolkit'


export const questionpaperReducer = createReducer({questionpapers:[]}, (builder) => {

    builder
    .addCase('allQuestionpaperRequest', (state) => { state.loading = true; })
    .addCase('allQuestionpaperSuccess', (state, action) => {
      state.loading = false;
      state.questionpapers=action.payload;
    })
    .addCase('allQuestionpaperFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

});