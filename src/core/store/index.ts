import { configureStore } from "@reduxjs/toolkit"
import { EditorReducer } from "./Editor.store"
import { PostReducer } from "./Post.slice"

const store = configureStore({
  reducer: {
    post: PostReducer,
    editor: EditorReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch