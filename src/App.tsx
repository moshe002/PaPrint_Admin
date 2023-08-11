import { BrowserRouter } from 'react-router-dom'; 

import Sidebar from "./Components/Sidebar"
import Router from "./Components/Router/Router"

function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col sm:flex-row h-full">
        <Sidebar />
        <div className="flex flex-col p-3 h-full w-full">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
