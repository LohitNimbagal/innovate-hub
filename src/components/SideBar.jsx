import React, { useState } from 'react';
import { Tab } from './ui/Tab';

const SideBar = () => {
  const teams = ['Design team', 'Marketing team', 'Development team'];
  const folders = ['Products', 'Sales', 'Design', 'Office', 'Legal'];

  const [highlightedTeam, setHighlightedTeam] = useState('Design team');
  const [highlightedFolder, setHighlightedFolder] = useState('Products');

  const handleTeamClick = (id) => {
    setHighlightedTeam(id);
  };

  const handleFolderClick = (id) => {
    setHighlightedFolder(id);
  };

  return (
    <div className='h-screen w-1/5 m-2 p-2 shadow rounded-md flex flex-col justify-between'>
      <div className='sidebarTop'>

        {/* User Tab */}
        <div className='shadow rounded-md p-2 flex items-center justify-between'>
          <div className='flex gap-2'>
            <div className='w-9 h-9 bg-black rounded-md'></div>
            <div className='text-xs'>
              <h3 className='text-gray-400'>INC</h3>
              <h3 className='tracking-wider font-semibold text-sm'>InnovaiteHub</h3>
            </div>
          </div>
          <div className='w-7 h-7 m-1 rounded-2xl bg-purple-400'></div>
        </div>

        {/* Teams Tabs */}
        <div className='my-5 flex flex-col gap-2'>
          {teams.map((team) => (
            <Tab key={team} id={team} onClick={() => handleTeamClick(team)} className={`p-2 flex items-center gap-2 justify-start hover:cursor-pointer ${highlightedTeam === team ? 'bg-gray-300' : ''}`}>
              <h4>{team}</h4>
            </Tab>
          ))}

          <Tab onClick={() => console.log('Create a team')} className='text-gray-400 p-2 flex items-center gap-2 justify-start'>
            <h4>Create a team</h4>
          </Tab>
        </div>

        {/* Folders Tabs */}
        <div className='p-1'>
          <div className='text-gray-400 flex items-center justify-between px-2 text-xs font-semibold'>
            <h3>FOLDERS</h3>
            <h4 className='text-lg'>+</h4>
          </div>

          {folders.map((folder) => (
            <Tab key={folder} id={folder} onClick={() => handleFolderClick(folder)} className={`p-2 flex items-center gap-2 justify-start hover:cursor-pointer ${highlightedFolder === folder ? 'bg-gray-300' : ''}`}>
              <div className={`flex items-center gap-2 justify-start`} >
                <h4>{folder}</h4>
              </div>
            </Tab>
          ))}
        </div>
      </div>

      <div className='sidebarBottom py-2'>
        <Tab className='shadow-none'>
          Invite teammates
        </Tab>
        <Tab className='shadow-none'>
          Help and First steps
        </Tab>
        <Tab className='shadow-none'>
          <div className='w-15px h-15px font-normal text-xs px-1'>7</div>
          days left on trial
        </Tab>
      </div>
    </div>
  );
};

export default SideBar;
