import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="not-found">
        <h2>This Page is Not Available</h2>
        <Link to="/">Go back HOME</Link>
    </div>

  )
}

export default NotFound;