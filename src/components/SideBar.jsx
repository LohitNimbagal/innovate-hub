import React from 'react'
import { Tab } from './ui/Tab'

export const SideBar = () => {

  const teams = ['Design team', 'Marketing team', 'Development team']
  const folders = ['Products', 'Sales', 'Design', 'Office', 'Legal']

  return (
    <div className='h-screen w-1/4 m-2 p-2 shadow rounded-md flex flex-col justify-between'>

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
          {/* Individual Team */}
          {teams.map((team) => (
            <Tab key={team}>
              <svg xmlns="http://www.w3.org/2000/svg" width='15px' height='15px' margin='2px' viewBox="0 0 24 24" fill="black">
                <path d="M16.5962 1.03651L22.9428 7.38312C23.1381 7.57838 23.1381 7.89496 22.9428 8.09022C22.8679 8.16513 22.7712 8.21431 22.6665 8.23067L21.1924 8.46113L15.5356 2.80428L15.7477 1.31935C15.7868 1.04599 16.04 0.856036 16.3134 0.895088C16.4205 0.910388 16.5197 0.960011 16.5962 1.03651ZM4.59487 20.1478C8.31725 16.8163 12.5899 15.82 17.2379 14.6273L17.6843 10.6099L13.3869 6.31241L9.36936 6.7588C8.17674 11.4068 7.18038 15.6795 3.84886 19.4018L2.4541 18.0071C5.28253 14.7072 6.34319 11.0539 7.7574 4.9256L14.1214 4.21849L19.7783 9.87539L19.0711 16.2393C12.9429 17.6535 9.28947 18.7142 5.98964 21.5426L4.59487 20.1478ZM9.87872 14.118C9.09767 13.3369 9.09767 12.0706 9.87872 11.2896C10.6598 10.5085 11.9261 10.5085 12.7071 11.2896C13.4882 12.0706 13.4882 13.3369 12.7071 14.118C11.9261 14.899 10.6598 14.899 9.87872 14.118Z"></path>
              </svg>

              <h4>{team}</h4>
            </Tab>
          ))}

          {/* Create Team */}

          <Tab className='text-gray-400'>
            <svg xmlns="http://www.w3.org/2000/svg" width='15px' height='15px' margin='2px' viewBox="0 0 24 24" fill="gray">
              <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"></path>
            </svg>

            <h4>Create a team</h4>
          </Tab>
        </div>

        {/* Folders Tabs */}
        <div className='p-1'>
          <div className='text-gray-400 flex items-center justify-between px-2 text-xs font-semibold' key='createFolder'>
            <h3>FOLDERS</h3>
            <h4 className='text-lg'>+</h4>
          </div>

          {folders.map((folder) => (
            <Tab className='font-normal tracking-wider' keys={folder}>
              <div className='flex items-center gap-2 justify-start'>
                <svg xmlns="http://www.w3.org/2000/svg" width='15px' height='15px' viewBox="0 0 24 24" fill="black"><path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path></svg>

                <h4>{folder}</h4>
              </div>


            </Tab>
          ))

          }

        </div>

      </div>

      <div className='sidebarBottom py-2'>
          <Tab className='shadow-none'>
          <svg xmlns="http://www.w3.org/2000/svg" width='15px' height='15px' viewBox="0 0 24 24" fill="black">
            <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path>
          </svg>
            Invite teammates
          </Tab>

          <Tab className='shadow-none'>
          <svg xmlns="http://www.w3.org/2000/svg" width='15px' height='15px' viewBox="0 0 24 24" fill="black">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z"></path>
            </svg>
            Help and First steps
          </Tab>

          <Tab className='shadow-none'>
            <div className='w-15px h-15px font-normal text-xs px-1'>7</div>
            days left on trial
          </Tab>
      </div>

    </div>
  )
}
