import { Link } from 'react-router-dom';

function Navigation () {

    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/create-exercise'>Add new exercise</Link>
        </nav>
    );
};

export default Navigation;