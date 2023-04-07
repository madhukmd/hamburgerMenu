// Write your code here
import './index.css'

const notfound = 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'

const NotFound = () => (
  <div className="not-found-container">
    <img src={notfound} alt="not found" className="not-found-img" />
    <h1 className="heading">Lost Your Way?</h1>
    <p className="description">
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)
export default NotFound
