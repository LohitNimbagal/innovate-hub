import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import data from '../../data.json';

const categoryColors = {
    'Technology': 'bg-green-200',
    'E-commerce': 'bg-blue-200',
    'Media': 'bg-orange-200',
    'Web Development': 'bg-yellow-200',
    'Entertainment': 'bg-red-200',
    'Cloud Computing': 'bg-purple-200',
    'Streaming': 'bg-lime-200',
}

const columns = [
    { field: 'brand', headerName: 'Brand', width: 130, sortable: false, disableColumnMenu: true },
    { field: 'description', headerName: 'Description', width: 180, sortable: false, disableColumnMenu: true },
    { field: 'members', headerName: 'Members', width: 130, sortable: false, disableColumnMenu: true },
    {
        field: 'categories', headerName: 'Categories', width: 200, sortable: false, disableColumnMenu: true,
        renderCell: (params) => (
            <div className='flex gap-1'>
                {params.value.map((cat, index) => (
                    <div key={index} className={`p-1 rounded-sm text-xs ${categoryColors[cat] || ''}`}>{cat}</div>

                ))}
            </div>
        )
    },
    {
        field: 'tags', headerName: 'Tags', width: 200, sortable: false, disableColumnMenu: true,
        renderCell: (params) => (
            <div className='flex gap-1'>
                {params.value.map((tag, index) => (
                    <div key={index} className='bg-gray-200 p-1 rounded-sm text-xs'># {tag}</div>
                ))}
            </div>
        )
    },
    {
        field: 'next meetings', headerName: 'Next meeting', width: 150, sortable: false, disableColumnMenu: true,

        renderCell: (params) => (
            <div className='bg-green-200 px-1'>{params.value}</div> // Customize cell content here
        )

    },
];

export default function DataTable() {

    const [sortedData, setSortedData] = React.useState(data);

    const handleSortButtonClick = () => {
        const sorted = [...sortedData].sort((a, b) => (a.brand > b.brand) ? 1 : -1);
        setSortedData(sorted);
    };

    return (
        <div className='w-full h-3/4 border-none shadow'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={handleSortButtonClick}>
                Sort Data
            </button>
            <DataGrid
                rows={sortedData}
                columns={columns}
                checkboxSelection
            />
        </div>

    );
}