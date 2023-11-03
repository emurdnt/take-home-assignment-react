import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import '../src/assets/Fonts.css'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products/Products'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    )
}

export default App
