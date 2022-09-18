import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../utils/axios"

const initialState = {
    postsMotivation: [],
    popularPostsMotivation: [],
    loading: false,
}

export const createPostMotivation = createAsyncThunk('post/createPostMotivation', async(params) => {
    try {
        const {data} = await axios.post('/postsMotivation', params)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const getAllPostsMotivation = createAsyncThunk('post/getAllPostsMotivation', async() => {
    try {
        const {data} = await axios.get('/postsMotivation')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        // Create Post
        [createPostMotivation.pending]: (state) => {
            state.loading = true
        },
        [createPostMotivation.fulfilled]: (state, action) => {
            state.loading = false
            state.postsMotivation.push(action.payload)
        },
        [createPostMotivation.rejected]: (state) => {
            state.loading = false
        },
        // Get All Posts
        [getAllPostsMotivation.pending]: (state) => {
            state.loading = true
        },
        [getAllPostsMotivation.fulfilled]: (state, action) => {
            state.loading = false
            state.postsMotivation = action.payload.postsMotivation
            state.popularPostsMotivation = action.payload.popularPostsMotivation
        },
        [getAllPostsMotivation.rejected]: (state) => {
            state.loading = false
        },
    },
})

export default postSlice.reducer