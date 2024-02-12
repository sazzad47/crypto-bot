import { Button, Card, Container, Header, Image, Input } from 'semantic-ui-react';

import rightImage from '../../assets/images/computer-ss.png';

const EmailCardTop = () => {
    return (
        <Container className="email-card-top">
            <Card>
                <div>
                    <Header as="h1">
                        Taking <br /> <span className="blue"> 100 Beta Testers </span>
                    </Header>
                    <p>Register For Exclusive Trader Perks!</p>
                </div>

                <div className="input">
                    <Input placeholder="Enter Your Email" />
                    <Button> Join Beta </Button>
                </div>

                <div className="stat">
                    <Header as="h2">363</Header>
                    <Header as="h1">
                        Users <br /> Waitlisted
                    </Header>
                </div>
                <div className="right-img">
                    <Image src={rightImage} />
                </div>
            </Card>
        </Container>
    );
};

export default EmailCardTop;
