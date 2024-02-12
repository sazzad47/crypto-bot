import { Container, Grid, GridColumn, GridRow, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import PathConstants from '../../routes/pathConstants';

import fb from '../../assets/images/fb.svg';
import x from '../../assets/images/x.svg';
import linkedin from '../../assets/images/in.svg';

const Footer = () => {
    return (
        <Container className="footer">
            <Grid>
                <GridRow columns={4}>
                    <GridColumn>
                        <Logo />
                        <Header as="h1">
                            Trade Effortlessly <br />
                            Simplify Life
                        </Header>
                    </GridColumn>
                    <GridColumn>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            About Us
                        </Header>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            Blog
                        </Header>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            FAQ
                        </Header>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            Media Kit
                        </Header>
                    </GridColumn>
                    <GridColumn>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            Support
                        </Header>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            T&Cs
                        </Header>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            Privacy Policy
                        </Header>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            Disclaimer
                        </Header>
                    </GridColumn>
                    <GridColumn>
                        <Image src={fb} />
                        <Image src={x} />
                        <Image src={linkedin} />
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default Footer;
