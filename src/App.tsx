import { BrowserRouter } from 'react-router-dom'; 

import Sidebar from "./Components/Sidebar"
import Router from "./Components/Router/Router"

function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col sm:flex-row h-full w-full">
        <Sidebar />
        <div className="w-full">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
