import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../Logo';
import PathConstants from '../../routes/pathConstants';
import Switch from '../ui/Switch';

const Header = () => {
    const location = useLocation();

    return (
        <Container className="nav">
            <Menu className="nav">
                <MenuItem name="Logo">
                    <Logo />
                </MenuItem>
                <MenuItem
                    as={Link}
                    to={PathConstants.CREATORS}
                    name="creators"
                    active={location.pathname === PathConstants.CREATORS}>
                    Creators
                </MenuItem>
                <MenuItem
                    as={Link}
                    to={PathConstants.COPIERS}
                    name="copiers"
                    active={location.pathname === PathConstants.COPIERS}>
                    Copiers
                </MenuItem>
                <MenuItem as={Link} to={PathConstants.CREATORS} name="Live Chart" active={false}>
                    Live Chart
                </MenuItem>
                <MenuItem as={Link} to={PathConstants.CREATORS} name="Marketplace" active={false}>
                    Marketplace
                </MenuItem>
                <MenuItem as={Link} to={PathConstants.CREATORS} name="Pricing" active={false}>
                    Pricing
                </MenuItem>
                <MenuItem as={Link} to={PathConstants.CREATORS} name="Content Hub" active={false}>
                    Content Hub
                </MenuItem>
                <MenuItem as={Link} to={PathConstants.CREATORS} name="Documentation" active={false}>
                    Documentation
                </MenuItem>
                <MenuItem>
                    <Switch />
                </MenuItem>
                <MenuItem position="right">
                    <Button className="login">Login</Button>
                </MenuItem>
            </Menu>
        </Container>
    );
};

export default Header;
