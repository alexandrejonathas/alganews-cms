import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import { useMemo } from "react";

import { useTable, Column } from 'react-table'

import * as T from './Table.styles'

type Data = {
    preview: React.ReactNode,
    col1: string,
    col2: string,
    actions: string
}

export default function Table () {
    const data = useMemo<Data[]>(() => [
        {
            preview: <Icon size="14px" color="#09F" path={ mdiOpenInNew } />,
            col1: 'Hello',
            col2: 'World',
            actions: 'Açoes'
        },
        {
            preview: <Icon size="14px" color="#09F" path={ mdiOpenInNew } />,
            col1: 'react-table',
            col2: 'rocks',
            actions: 'Açoes'
        },
        {
            preview: <Icon size="14px" color="#09F" path={ mdiOpenInNew } />,
            col1: 'whatever',
            col2: 'you want',
            actions: 'Açoes'
        }
    ], [])

    const columns = useMemo<Column<Data>[]>(() => [
        {
            Header: '',
            accessor: 'preview'
        },
        {
            Header: 'Column 1',
            accessor: 'col1'
        },
        {
            Header: 'Column 2',
            accessor: 'col2'
        },
        {
            Header: 'Ações',
            accessor: 'actions'
        }
    ], [])

    const { 
        getTableProps, 
        getTableBodyProps, 
        prepareRow, 
        headerGroups, 
        rows 
    } = useTable<Data>({ data, columns })
    console.log(rows)
    return (
    <T.Wrapper cellPadding={0} cellSpacing={0} { ...getTableProps() }>
        <T.Heading>
            { 
                headerGroups.map(headerGroup => 
                    <T.HeadingRow {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => 
                                <T.HeadingCell { ...column.getHeaderProps() }>
                                    { column.render('Header') }
                                </T.HeadingCell>
                            )
                        }
                    </T.HeadingRow>
                ) 
            }
        </T.Heading>
        <T.Body {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    return <T.BodyRow { ...row.getRowProps() }>
                        {
                            row.cells.map(cell => {
                               return <T.BodyCell {...cell.getCellProps() }>
                                   { cell.render('Cell') }
                               </T.BodyCell>     
                            })
                        }
                    </T.BodyRow>
                })
            }
        </T.Body>
    </T.Wrapper>
    )
}