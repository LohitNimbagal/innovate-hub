import { Button } from '../components/ui/Button'
import React, { useEffect, useState } from 'react'
import Dropdown from './ui/Dropdown'

export const ToolBar = ({ data, setNewData, newData }) => {

    const [sort, setSort] = useState(true)
    const [selectedCatOption, setSelectedCatOption] = useState(null);
    const [selectedTagOption, setSelectedTagOption] = useState(null);

    const catOptions = [
        'Technology', 'E-commerce', 'Media', 'Web Development', 'Entertainment', 'Cloud Computing', 'Streaming', 'All'
    ];

    const tagsOptions = [
        "Website Builder", "Small Business", "Web Design", "Online Store", "Dropshipping", "Movies", "Theme Parks", "Animation", "TV Shows", "Streaming", "Cloud Services", "All"
    ]

    const handleSelectCatOption = (option) => {
        setSelectedCatOption(option);
    };

    const handleSelectTagsOption = (option) => {
        setSelectedTagOption(option);
    };

    const handleSort = () => {
        setSort(!sort)

        if (sort) {
            const sorted = [...newData].sort((a, b) => (a.brand > b.brand) ? 1 : -1);
            setNewData(sorted);
        } else {
            setNewData(data)
        }
    };

    useEffect(() => {
        if (selectedCatOption !== 'None' && selectedCatOption !== 'All') {
            const cat = data.filter(item => item.categories.includes(selectedCatOption));
            setNewData(cat);
        } else if (selectedCatOption === 'All') {
            setNewData(data)
        }
    }, [selectedCatOption])

    useEffect(() => {
        if (selectedTagOption !== 'None' && selectedTagOption !== 'All') {
            const tag = data.filter(item => item.tags.includes(selectedTagOption));
            setNewData(tag);
        } else if (selectedTagOption === 'All') {
            setNewData(data)
        }
    }, [selectedTagOption])

    return (
        <div className='flex'>
            <Button onClick={handleSort}>
                Sort
            </Button>

            <Button>
                Filter
            </Button>

            <div>
                <Dropdown options={catOptions} onSelect={handleSelectCatOption}
                    title={`Category : ${selectedCatOption ? selectedCatOption : 'All'}`} />
            </div>

            <div>
                <Dropdown options={tagsOptions} onSelect={handleSelectTagsOption}
                    title={`Tags : ${selectedTagOption ? selectedTagOption : 'All'}`} />
            </div>
        </div>
    )
}
