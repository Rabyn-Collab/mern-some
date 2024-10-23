import { createSlice } from "@reduxjs/toolkit";
import { getData, setData } from "./localstore";



export const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    posts: getData()
  },
  reducers: {

    addPost: (state, action) => {
      state.posts.push(action.payload);
      setData(state.posts);
    },
    removePost: (state, action) => {
      state.posts.splice(action.payload, 1);
      setData(state.posts);
    },
    updatePost: (state, action) => {
      state.posts = state.posts.map((post) => post.id === action.payload.id ? action.payload : post);
      setData(state.posts);
    }
  }
});



export const { addPost, removePost, updatePost } = postSlice.actions;