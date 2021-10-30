import { Post } from "alexandrejonathas-alganews-sdk";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import selectPaginatedPosts from "../selectors/selectedPaginatedPosts";
import selectPostsFetching from "../selectors/selectPostsFetching";

import * as PostActions from '../store/Post.slice'

export default function usePosts () {
  const dispatch = useDispatch()

  const paginatedPosts = useSelector(selectPaginatedPosts)
  const loading = useSelector(selectPostsFetching)

  //Encapsulando com useCallback para evitar loop infinito
  const fetchPosts = useCallback (async function (query: Post.Query) {
    dispatch(PostActions.fetchPosts(query))
  },[dispatch])

  return {
    paginatedPosts,
    loading, 
    fetchPosts
  }
}