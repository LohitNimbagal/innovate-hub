import React from 'react';
import data from '../../../data.json';
import { useReactTable } from '@tanstack/react-table';

const columns = [
    { accessor: 'id', Header: 'ID', width: 70 },
    { accessor: 'brand', Header: 'Brand', width: 130 },
    { accessor: 'description', Header: 'Description', width: 200 },
    { accessor: 'members', Header: 'Members', width: 200 },
    { accessor: 'categories', Header: 'Categories', width: 150 },
    { accessor: 'tags', Header: 'Tags', width: 150 },
    { accessor: 'next meetings', Header: 'Next Meetings', width: 150 },
    { accessor: 'logo', Header: 'Logo', width: 150 },
];

export const ReactTable = () => {
    const {
        headerGroups,
        rows,
        prepareRow,
    } = useReactTable({
        columns,
        data,
    });

    return (
        <div>
            <table>
                <thead>
                    {headerGroups?.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {rows?.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
