import { Route, Routes } from 'react-router-dom'; 

import Dashboard from '../Pages/Dashboard';
import Users from '../Pages/Users';
import About from '../Pages/About';

function Router() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/about' element={<About />} />
      </Routes>
    </>
        
  )
}

export default Router