
import { Link } from "react-router-dom";
    
const NoPage = () => {
  return (
    <div>
      <h1>404 No Page Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NoPage;
