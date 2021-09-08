import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import { format } from "date-fns"
import { useEffect, useMemo, useState } from "react"
import { Column, useTable } from "react-table"
import { Post } from "../../sdk/@types"
import PostService from "../../sdk/services/Post.service"

import Table from '../components/Table'

export default function PostListFeatures () {

    const [posts, setPosts] = useState<Post.Paginated>()
    
    useEffect(() => {
      PostService.getAllPosts({
        page: 0,
        size: 7,
        showAll: true,
        sort: ['createdAt', 'desc']
      })
      .then(setPosts)
    }, [])
    
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
    
    const instance = useTable<Post.Summary>({
      data: posts?.content || [], columns
    })
    
    return <Table<Post.Summary> instance={instance} />    
}