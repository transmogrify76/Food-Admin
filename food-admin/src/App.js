import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminDashboard from './components/AdminDashboard'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />}/>
          <Route index element={<AdminDashboard />} />
         
          
        
      </Routes>
    </Router>
  )
}

export default App