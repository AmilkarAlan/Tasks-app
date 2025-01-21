
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Tasks from './pages/Tasks'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </>
  )
}

export default App
