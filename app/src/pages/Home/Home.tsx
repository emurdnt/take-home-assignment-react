import Layout from '../../components/Layout/Layout'
import NavBar from '../../components/Nav/Nav'
import home from '../../assets/Home.png'
import './Home.css'

const Home = () => {
    return (
        <Layout backgroundColor="grey" align="left">
            <NavBar />
            <div className="content-container">
                <h1>Design and code, united at last </h1>
                <p className="tagline">
                    Judo is a design and build tool for SwiftUI apps that writes production-ready code for you while
                    you’re designing. Eliminate back-and-forth with developers and free them from unrewarding grunt
                    work.
                </p>
            </div>
            <img src={home} className="home-img" alt="image of computer with code and design" />
        </Layout>
    )
}

export default Home
