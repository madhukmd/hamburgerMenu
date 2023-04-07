// Write your code here
import './index.css'

const aboutSl = 'https://assets.ccbp.in/frontend/react-js/about-sm-img.png'
const aboutLg = 'https://assets.ccbp.in/frontend/react-js/about-lg-img.png'

const About = () => (
  <div className="about-container">
    <img src={aboutSl} alt="about" className="small-img" />
    <img src={aboutLg} alt="about" className="large-img" />
  </div>
)
export default About
