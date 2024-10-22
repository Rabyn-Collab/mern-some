import { createSlice } from "@reduxjs/toolkit";



export const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    posts: []
  },
  reducers: {

    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      state.posts.splice(action.payload, 1);
    }
  }
});



export const { addPost, removePost } = postSlice.actions;