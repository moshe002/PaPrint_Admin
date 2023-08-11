import { Link } from 'react-router-dom'
import { BiHome, BiUser, BiAt  } from 'react-icons/bi'

import Buttons from './Buttons'

function Sidebar() {
  return (
    <div className="flex flex-row md:flex-col bg-gray-500 h-1/6 md:h-auto w-full md:w-2/12 fixed md:static bottom-0 md:bottom-full">
      <div className='flex flex-row md:flex-col w-full h-full justify-evenly items-center'>
        <Link to="/">
          <Buttons text={"Home"} icon={<BiHome />} />
        </Link>
        <Link to="/users">
          <Buttons text={"Users"} icon={<BiUser />} />
        </Link>
        <Link to="/about">
          <Buttons text={"About"} icon={<BiAt />} />
        </Link>
      </div>
    </div>
  )
}

export default Sidebar