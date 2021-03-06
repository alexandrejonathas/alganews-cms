import styled from 'styled-components'
import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import { format } from "date-fns"
import { useEffect, useMemo, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { Column, usePagination, useTable } from "react-table"
import withBoundary from "../../core/hoc/withBoundary"
import modal from "../../core/utils/modal"
import Loading from "../components/Loading"

import Table from '../components/Table'
import PostPreview from "./PostPreview"
import { Post } from 'alexandrejonathas-alganews-sdk'
import usePosts from '../../core/hooks/usePosts'

function PostListFeatures () {

    const { paginatedPosts, loading, fetchPosts } = usePosts()
    const [page, setPage] = useState(0)

    useEffect(() => {
        fetchPosts({
          page: page,
          size: 3,
          showAll: true,
          sort: ['createdAt', 'desc']
        })
    }, [fetchPosts, page])
    
    const columns = useMemo<Column<Post.Summary>[]>(() => [
        {
            Header: '',
            accessor: 'id',
            Cell: () => <Icon path={mdiOpenInNew} size={'14px'} color="#09F" />,
            width: 40
        },
        {
            Header: () => <div style={{ textAlign: 'left' }}>Artigo</div>,
            accessor: 'title',
            width: 320,
            Cell: (props) => <div style={{ 
                textAlign: 'left', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                maxWidth: 270
              }} >
              <img width="24px" height="24px" src={props.row.original.editor.avatarUrls.small} alt={props.row.original.editor.name} />
              <PostTitleAnchor
                title={props.value} 
                href={`/posts/${props.row.original.id}`}
                onClick={e => {
                  e.preventDefault()
                  modal({children: <PostPreview postId={props.row.original.id} />})
                }}
              >
                {props.value}
              </PostTitleAnchor>
            </div>
            
        },
        {
            Header: () => <div style={{ textAlign: 'right' }}>Data de cria????o</div>,
            accessor: 'createdAt',
            Cell: (props) => <div style={{ 
              textAlign: 'right',
              fontFamily: '"Roboto mono", monospace' 
            }} >{ format(new Date(props.value), 'dd/MM/yyyy HH:mm') }</div>
        },
        {
            Header: () => <div style={{ textAlign: 'right' }}>??ltima atualiza????o</div>,
            accessor: 'updatedAt',
            Cell: (props) => <div style={{ 
              textAlign: 'right', 
              fontFamily: '"Roboto mono", monospace' 
            }} >{ format(new Date(props.value), 'dd/MM/yyyy HH:mm') }</div>
        },
        {
            id: Math.random().toString(),
            accessor: 'published',
            Header: () => <div style={{ textAlign: 'right' }}>A????es</div>,
            Cell: (props) => <div style={{ textAlign: 'right' }} >
                {
                  props.value ? 'Publicado' : 'Privado'
                }  
            </div>
        }
    ], []) 
    
    const instance = useTable<Post.Summary>(
      {
        data: paginatedPosts?.content || [], 
        columns,
        manualPagination: true,
        initialState: { pageIndex: 0 },
        pageCount: paginatedPosts?.totalPages
      }, 
      usePagination
    )
    
    if(!paginatedPosts)
      return <div>
        <Skeleton height={32} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </div>

    return <>
      <Loading show={loading} />
      <Table<Post.Summary> 
        instance={instance}
        onPaginate={ setPage } 
      />
    </>    
}

const PostTitleAnchor = styled.a`
  font-size: 14ox;
  text-decoration: none;
  color: #274060;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover, &:focus {
    color: #09F;
    text-decoration: underline;
  }
`

export default withBoundary(PostListFeatures, 'lista de posts')