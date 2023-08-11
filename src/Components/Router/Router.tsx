import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import Dashboard from '../Pages/Dashboard';
import Users from '../Pages/Users';
import About from '../Pages/About';

function Router() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/users' element={<Users />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    </>
        
  )
}

export default Router