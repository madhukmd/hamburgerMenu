// Write your code
import './index.css'

const homeSl = 'https://assets.ccbp.in/frontend/react-js/home-sm-img.png'
const homeLg = 'https://assets.ccbp.in/frontend/react-js/home-lg-img.png'

const Home = () => (
  <div className="home-container">
    <img src={homeSl} alt="home" className="small-img" />
    <img src={homeLg} alt="home" className="large-img" />
  </div>
)
export default Home
