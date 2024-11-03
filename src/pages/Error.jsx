
import { Link } from "react-router-dom";
    
const NoPage = () => {
  return (
    <div>
      <center>
        <h1>404 No Page Found!</h1>
        <button><Link to="/">Go Home</Link></button>
      </center>
    </div>
  );
};

export default NoPage;
