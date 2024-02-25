import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// create Blog Post

export const createBlog = createAsyncThunk("createBlog", (data) => {
    let response = JSON.parse(localStorage.getItem("blogPosts"));
    console.log(response);
    try {
        if (response != null) {
            const res = data;
            data.like = false;
            response.push(data);
            localStorage.setItem("blogPosts", JSON.stringify(response));
        }
        else {
            data.like = false;
            let res = [data];
            localStorage.setItem("blogPosts", JSON.stringify(res));
        }
    } catch (error) {
        console.log(error);
    }
});

// Fetch All Data

export const fetchAllData = createAsyncThunk("fetchAllData", () => {
    const response = JSON.parse(localStorage.getItem("blogPosts"));
    try {
        return response;
    } catch (error) {
        console.log(error);
    }
});

// get post by id

export const getPostById = createAsyncThunk("getPostById", (id) => {
    const response = JSON.parse(localStorage.getItem("blogPosts"));
    if (id) {
        const res = [response[id]];
        return res;
    }
    return [];
})

//Delete Blog

export const deletePost = createAsyncThunk("deletePost", (id) => {
    const response = JSON.parse(localStorage.getItem("blogPosts"));
    response.splice(id, 1);
    localStorage.setItem("blogPosts", JSON.stringify(response));
    return JSON.parse(localStorage.getItem("blogPosts"));
});

// Update Blog

export const updateBlog = createAsyncThunk("updateBlog", (data) => {
    let response = JSON.parse(localStorage.getItem("blogPosts"));
    try {
        response[data.id] = data.data;
        localStorage.setItem("blogPosts", JSON.stringify(response));
        return JSON.parse(localStorage.getItem("blogPosts"));
    } catch (error) {
        console.log(error);
    }
});

// Like/unlike post

export const likeActionofPost = createAsyncThunk("likeActionofPost", (id) => {
    let response = JSON.parse(localStorage.getItem("blogPosts"));
    try {
        response[id].like = !response[id].like;
        localStorage.setItem("blogPosts", JSON.stringify(response));
        return JSON.parse(localStorage.getItem("blogPosts"));
    } catch (error) {
        console.log(error);
    }
});

export const getPost = createSlice({
    name: "Posts",
    initialState: {
        posts: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [createBlog.pending]: (state) => {
            state.loading = true;
        },
        [createBlog.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [createBlog.rejected]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [fetchAllData.pending]: (state) => {
            state.loading = true;
        },
        [fetchAllData.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [fetchAllData.rejected]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [deletePost.pending]: (state) => {
            state.loading = true;
        },
        [deletePost.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [deletePost.rejected]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [getPostById.pending]: (state) => {
            state.loading = true;
        },
        [getPostById.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [getPostById.rejected]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [updateBlog.pending]: (state) => {
            state.loading = true;
        },
        [updateBlog.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [updateBlog.rejected]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [likeActionofPost.pending]: (state) => {
            state.loading = true;
        },
        [likeActionofPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [likeActionofPost.rejected]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
    }
});

export default getPost.reducer;