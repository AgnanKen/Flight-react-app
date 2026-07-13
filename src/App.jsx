import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewFlight from './components/ViewFlight'
import AddFlight from './components/AddFlight'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddFlight />} />
        <Route path='/add' element={<AddFlight />} />
        <Route path='/view' element={<ViewFlight />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
