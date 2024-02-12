import { Button, Container, Header, Image } from 'semantic-ui-react';

import heroImg from '../../assets/images/hero-img.png';

const Hero = () => {
    return (
        <Container className="hero">
            <Header as="h1">Trade Crypto Like A Pro Through Automation</Header>
            <p>The marketplace for crypto trading bots crafted by the community to help you unleash your potential.</p>
            <Button>Join Us</Button>

            <div className="stat">
                <Header as="h2">Total Trading Value Handled by Our Bots</Header>
                <Header as="h1">$650,000</Header>
            </div>

            <div className="img-box">
                <Image src={heroImg} />
            </div>
        </Container>
    );
};

export default Hero;
