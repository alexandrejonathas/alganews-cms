import { createAsyncThunk, createReducer, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { User, UserService } from "alexandrejonathas-alganews-sdk";

export const fetchAllEditors = createAsyncThunk('editor/fetch/AllEditors', 
  async function () {
    return UserService.getAllEditors()
  }
)

interface EditorStoreState {
  editorsList: User.EditorSummary[],
  fetching: boolean
}

const initialState: EditorStoreState = {
  editorsList: [],
  fetching: false
}

export const EditorReducer = createReducer(initialState, (builder) => {

  const pendingActions = isPending(fetchAllEditors)

  const fulfiledActions = isFulfilled(fetchAllEditors)

  const rejectedActions = isRejected(fetchAllEditors)

  builder.addCase(fetchAllEditors.fulfilled, (state, action) => {
    state.editorsList = action.payload
  })
  .addMatcher(pendingActions, (state) => {
    state.fetching = true
  })
  .addMatcher(fulfiledActions, (state) => {
    state.fetching = false
  })
  .addMatcher(rejectedActions, (state) => {
    state.fetching = false
  })
})