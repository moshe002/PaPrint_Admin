import Sidebar from "./Components/Sidebar"

import Router from "./Components/Router/Router"

function App() {

  return (
    <div className="flex flex-col sm:flex-row h-screen w-full">
      <Sidebar />
      <div className="p-5">
        <Router />
      </div>
    </div>
  )
}

export default App
