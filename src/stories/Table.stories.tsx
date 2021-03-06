import { mdiOpenInNew } from '@mdi/js';
import Icon from '@mdi/react';
import { Meta } from '@storybook/react';
import { useMemo } from 'react';
import { Column, useTable } from 'react-table';

import Table from '../app/components/Table/Table';

export default {
  title: 'Example/Table',
  component: Table,
  //argTypes: {
  //  backgroundColor: { control: 'color' },
  //},
} as Meta;

type Data = {
  preview: React.ReactNode,
  col1: string,
  col2: string,
  actions: string
}

export function Posts () {
  type Post = {
    id: number
    title: string
    views: number
    author: {
      name: string
      avatar: string
    }
    conversions: {
      thousands: number
      percentage: number
    }
  }
  const data = useMemo<Post[]>(() => [
    {
      author: {
        name: 'Daniel Bonifacio',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
      },
      id: 1,
      conversions: {
        percentage: 64.35,
        thousands: 607,
      },
      title: 'Como dobrei meu salário aprendendo somente React',
      views: 985415
    },
    {
      author: {
        name: 'Daniel Bonifacio',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
      },
      id: 2,
      conversions: {
        percentage: 64.35,
        thousands: 607,
      },
      title: 'React.js vs. React Native: a REAL diferença entre os dois',
      views: 985415
    },
    {
      author: {
        name: 'Daniel Bonifacio',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
      },
      id: 3,
      conversions: {
        percentage: 95.35,
        thousands: 845,
      },
      title: 'Como dobrei meu salário aprendendo somente React',
      views: 985415
    }
  ], [])

  const columns = useMemo<Column<Post>[]>(() => [
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
          <img width="24px" height="24px" src={props.row.original.author.avatar} alt={props.row.original.author.name} />
          {props.value}
        </div>
        
    },
    {
        Header: () => <div style={{ textAlign: 'right' }}>Views</div>,
        accessor: 'views',
        Cell: (props) => <div style={{ textAlign: 'right', fontWeight: 700, fontFamily: '"Roboto mono", monospace' }} >{props.value.toLocaleString('pt-BR')}</div>
    },
    {
        Header: () => <div style={{ textAlign: 'left' }}>Conversões</div>,
        accessor: 'conversions',
        Cell: (props) => <div style={{ display: 'flex', gap: '8px', fontWeight: 700, fontFamily: '"Roboto mono", monospace' }} >
          <span>{props.value.thousands}K</span>
          <span style={{color:'#09F'}}>({props.value.percentage}%)</span>  
        </div>
    },
    {
        id: Math.random().toString(),
        Header: () => <div style={{ textAlign: 'right' }}>Ações</div>,
        Cell: () => <div style={{ textAlign: 'right' }} >
            todo: Ações  
        </div>
    }
], []) 

  const instance = useTable<Post>({data, columns})

  return <Table<Post> instance={instance} />
}

export function WithoutData () {
  const data = useMemo<Data[]>(() => [], [])

const columns = useMemo<Column<Data>[]>(() => [
    {
        Header: '',
        accessor: 'preview'
    },
    {
        Header: 'Column 1',
        accessor: 'col1',
        width: 320,
        Cell: (row) => <div style={{ textAlign: 'right' }} >{row.value}</div>
        
    },
    {
        Header: 'Column 2',
        accessor: 'col2',
        Cell: (row) => <div style={{ textAlign: 'center' }} >{row.value}</div>
    },
    {
        Header: 'Ações',
        accessor: 'actions'
    }
], []) 

  const instance = useTable<Data>({data, columns})

  return <Table<Data> instance={instance} />
}