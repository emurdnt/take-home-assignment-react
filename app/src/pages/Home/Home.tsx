import { Button } from '../../components/Button/Button'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Layout>
            <Link to="/login">Login</Link>
        </Layout>
    )
}

export default Home
