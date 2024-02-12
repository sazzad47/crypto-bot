import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

import logo from '../assets/images/Logo.svg';
import logoText from '../assets/images/Logo-Text.svg';
import PathConstants from '../routes/pathConstants';

const Logo = () => {
    return (
        <Link className="nav-logo" to={PathConstants.CREATORS}>
            <Image src={logo} alt="logo" />
            <Image src={logoText} alt="logo" />
        </Link>
    );
};

export default Logo;
