import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="bg-gray-500 h-1/6 w-full fixed bottom-0 sm:bottom-full sm:static sm:h-full sm:w-2/12">
        <div className="flex flex-col justify-center items-center p-5 text-white">
            <h1 className="text-3xl font-semibold font-mono">Admin</h1>
        </div>
        <div>
            <Link to="/">Dashboard</Link>
            
        </div>
    </div>
  )
}

export default Sidebar