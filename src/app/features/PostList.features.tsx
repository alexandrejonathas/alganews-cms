import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import { format } from "date-fns"
import { useEffect, useMemo, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { Column, usePagination, useTable } from "react-table"
import withBoundary from "../../core/hoc/withBoundary"
import { Post } from "../../sdk/@types"
import PostService from "../../sdk/services/Post.service"
import Loading from "../components/Loading"

import Table from '../components/Table'

function PostListFeatures () {

    const [posts, setPosts] = useState<Post.Paginated>()
    
    const [error, setError] = useState<Error>()

    const [page, setPage] = useState(0)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      PostService.getAllPosts({
        page: page,
        size: 7,
        showAll: true,
        sort: ['createdAt', 'desc']
      })
      .then(setPosts)
      .catch(e => setError(new Error(e.message)))
      .finally(() => setLoading(false))
    }, [page])
    
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
            Cell: (props) => <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '8px' }} >
              <img width="24px" height="24px" src={props.row.original.editor.avatarUrls.small} alt={props.row.original.editor.name} />
              {props.value}
            </div>
            
        },
        {
            Header: () => <div style={{ textAlign: 'right' }}>Data de criação</div>,
            accessor: 'createdAt',
            Cell: (props) => <div style={{ 
              textAlign: 'right',
              fontFamily: '"Roboto mono", monospace' 
            }} >{ format(new Date(props.value), 'dd/MM/yyyy HH:mm') }</div>
        },
        {
            Header: () => <div style={{ textAlign: 'right' }}>Última atualização</div>,
            accessor: 'updatedAt',
            Cell: (props) => <div style={{ 
              textAlign: 'right', 
              fontFamily: '"Roboto mono", monospace' 
            }} >{ format(new Date(props.value), 'dd/MM/yyyy HH:mm') }</div>
        },
        {
            id: Math.random().toString(),
            accessor: 'published',
            Header: () => <div style={{ textAlign: 'right' }}>Ações</div>,
            Cell: (props) => <div style={{ textAlign: 'right' }} >
                {
                  props.value ? 'Publicado' : 'Privado'
                }  
            </div>
        }
    ], []) 
    
    const instance = useTable<Post.Summary>(
      {
        data: posts?.content || [], 
        columns,
        manualPagination: true,
        initialState: { pageIndex: 0 },
        pageCount: posts?.totalPages
      }, 
      usePagination
    )
    
    if(error)
      throw error

    if(!posts)
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

export default withBoundary(PostListFeatures, 'lista de posts')