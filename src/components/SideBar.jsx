import React, { useEffect, useState } from 'react';
import { Tab } from './ui/Tab';
import { Link } from 'react-router-dom';

const SideBar = ({ openMenu, setSideBarSelections }) => {

  const teams = [
    {
      team: 'Design team',
      folders: [
        {
          name: 'Products',
          files: ['Roadmap', 'Feedback', 'Performance', 'Team', 'Analytics']
        },
        {
          name: 'Sales',
          files: ['Roadmap', 'Feedback', 'Performance', 'Team', 'Analytics']
        }
      ]
    },
    {
      team: 'Marketing team',
      folders: [
        {
          name: 'Brands',
          files: ['Roadmap', 'Feedback', 'Performance', 'Team', 'Analytics']
        },
        {
          name: 'Meetings',
          files: ['Roadmap', 'Feedback', 'Performance', 'Team', 'Analytics']
        }
      ]
    }
  ];


  const [highlightedTeam, setHighlightedTeam] = useState('Design team');
  const [highlightedFolder, setHighlightedFolder] = useState(null);
  const [showFiles, setShowFiles] = useState(false)

  const handleTeamClick = (id) => {
    setHighlightedTeam(id);
  };

  const handleFolderClick = (id) => {
    setHighlightedFolder(id);
  };

  const handelShowFiles = (id) => {
    setShowFiles(!showFiles)
  }

  useEffect(() => {
    setSideBarSelections({
      team: highlightedTeam,
      folder: highlightedFolder
    })
  }, [highlightedTeam, highlightedFolder])

  return (
    <div className={`${openMenu ? 'flex' : 'hidden'} w-full h-auto lg:w-1/5 m-1 p-2 shadow rounded-md lg:flex flex-col justify-between`}>
      <div className='sidebarTop'>

        {/* User Tab */}
        <Link to={'/user'}>
          <div className='shadow rounded-md p-2 flex items-center justify-between hover:bg-gray-100 hover:cursor-pointer'>
            <div className='flex gap-2'>
              <div className='w-9 h-9 bg-black rounded-md'></div>
              <div className='text-xs'>
                <h3 className='text-gray-400'>INC</h3>
                <h3 className='tracking-wider font-semibold text-sm'>InnovaiteHub</h3>
              </div>
            </div>
            <div className='w-7 h-7 m-1 rounded-2xl bg-purple-400'></div>
          </div>
        </Link>

        {/* Teams Tabs */}
        <div className='my-5 flex flex-col gap-2'>
          {teams.map((team) => (
            <Tab key={team.team} id={team.team} onClick={() => handleTeamClick(team.team)} className={`p-2 flex items-center gap-2 justify-start hover:cursor-pointer ${highlightedTeam === team.team ? 'bg-gray-200' : 'hover:bg-gray-100 '}`}>
              <h4>{team.team}</h4>
            </Tab>
          ))}

          <Tab onClick={() => console.log('Create a team')} className='text-gray-400 p-2 flex items-center gap-2 justify-start'>
            <h3 className='px-1.5 rounded border-2 text-gray-400 text-xs'>+</h3>

            <h4>Create a team</h4>
          </Tab>
        </div>

        {/* Folders Tabs */}
        <div className='p-1 flex flex-col gap-1'>
          <div className='text-gray-400 flex items-center justify-between px-2 text-xs font-semibold  hover:cursor-pointer'>
            <h3>FOLDERS</h3>
            <h4 className='text-lg'>+</h4>
          </div>

          {/* Individual Folders */}
          {teams.map((team) => (
            team.team === highlightedTeam && (
              team.folders.map((folder) => (
                <div key={`${team.team}-${folder.name}`}>

                  <Tab key={folder.name} id={folder.name} onClick={() => handleFolderClick(folder.name)} className={`p-2 h-auto flex flex-wrap items-center gap-2 justify-start hover:cursor-pointer ${highlightedFolder === folder.name ? 'bg-gray-200' : 'hover:bg-gray-100'}`}>

                    <div className={`w-full h-auto flex items-center gap-2 justify-between z-10`} >
                      <h4>{folder.name}</h4>

                      <svg xmlns="http://www.w3.org/2000/svg" width='15px' height='15px' viewBox="0 0 24 24" fill="black" onClick={handelShowFiles}><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                    </div>

                  </Tab>

                  <div>
                    <div className='flex flex-col pl-3 w-full text-xs font-semibold'>
                      {showFiles && folder.name === highlightedFolder && (
                        folder.files?.map((file, index) => (
                          <div key={index} className='m-2 w-full'>
                            <h4>{file}</h4>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                </div>
              ))
            )
          ))}

        </div>

      </div>

      <div className='sidebarBottom py-2'>
        <Tab className='shadow-none hover:bg-gray-100 hover:cursor-pointer'>
          Invite teammates
        </Tab>
        <Tab className='shadow-none hover:bg-gray-100 hover:cursor-pointer'>
          Help and First steps
        </Tab>
        <Tab className='shadow-none hover:bg-gray-100 hover:cursor-pointer'>
          <div className='w-15px h-15px font-normal text-xs px-1'>7</div>
          days left on trial
        </Tab>
      </div>
    </div>
  );
};

export default SideBar;
