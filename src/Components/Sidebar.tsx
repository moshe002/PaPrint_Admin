import { Link } from 'react-router-dom'
import { BiHome, BiUser, BiAt  } from 'react-icons/bi'

import Buttons from './Buttons'

function Sidebar() {
  return (
    <div className="flex flex-row md:flex-col items-center justify-evenly
    bg-gray-500 h-1/6 md:h-screen w-full md:w-2/12 fixed bottom-0 z-50">
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
  )
}

export default Sidebar