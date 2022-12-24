import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /** DARK MODE  */
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    /** Login Mode */
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    /** LOGOUT Mode */
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    /**set Friends Mode */
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    /** Set  Posts Mode */
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    /** Set updated Mode */
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
