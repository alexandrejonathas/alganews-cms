import { 
  createAsyncThunk, 
  createReducer, 
  //createSlice, 
  isFulfilled, 
  isPending, 
  isRejected
} from "@reduxjs/toolkit";
import { Post, PostService } from "alexandrejonathas-alganews-sdk";

interface PostSliceState {
  paginated?: Post.Paginated,
  fetching: boolean
}

const initialState: PostSliceState = {
  paginated: {
    page: 0,
    size: 0,
    totalElements: 0,
    totalPages: 0,
    content: []
  },
  fetching: false
}

export const fetchPosts = createAsyncThunk('post/fetchPosts', async function(query: Post.Query) {
  const posts = await PostService.getAllPosts(query)
  return posts
})

export const PostReducer = createReducer(initialState, (builder) => {
  const pendingActions = isPending(fetchPosts)

  const fulfiledActions = isFulfilled(fetchPosts)

  const rejectedActions = isRejected(fetchPosts)

  builder
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.paginated = action.payload
    })
    .addMatcher(pendingActions, (state) => {
      state.fetching = true
    })
    .addMatcher(fulfiledActions, (state) => {
      state.fetching = false
    }).addMatcher(rejectedActions, (state, action) => {
      state.fetching = false
    })
  
})


/*
Exemplifica a criação de slice comentado porque no curso será utilizado a maneira acima
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers (builder) {

    const pendingActions = isPending(fetchPosts)

    const fulfiledActions = isFulfilled(fetchPosts)

    const rejectedActions = isRejected(fetchPosts)


    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.paginated = action.payload
      })
      .addMatcher(pendingActions, (state) => {
        state.fetching = true
      })
      .addMatcher(fulfiledActions, (state) => {
        state.fetching = false
      }).addMatcher(rejectedActions, (state) => {
        state.fetching = false
      })
  }
})

export const PostReducer = postSlice.reducer */