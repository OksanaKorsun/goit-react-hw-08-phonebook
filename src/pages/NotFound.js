import { Link } from 'react-router-dom';
import { RestrictedRoute } from 'components/RestrictedRoute';
const NotFound = () => {
  return (
    <div>
      <p>Error 404. Sorry, page wasn`t found. </p>
      <Link to={RestrictedRoute}>
        <span>{`Back to the <<Home page<<.`}</span>
      </Link>
    </div>
  );
};
export default NotFound;
