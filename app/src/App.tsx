import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import '../src/assets/Fonts.css'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default App
