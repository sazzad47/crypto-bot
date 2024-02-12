import { Button, Card, Container, Header, Image, Input } from 'semantic-ui-react';

import leftImage from '../../assets/images/man-with-computer.png';
import rightImage from '../../assets/images/phone-ss.png';

const EmailCardBottom = () => {
    return (
        <Container className="email-card-btm">
            <Card>
                <div>
                    <Header as="h1">
                        Fancy Being an <span className="blue"> Early Adopter </span>
                    </Header>
                    <p>Our beta testers get the opportunity of using the platform before everyone!</p>
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

                <div className="left-img">
                    <Image src={leftImage} />
                </div>
                <div className="right-img">
                    <Image src={rightImage} />
                </div>
            </Card>
        </Container>
    );
};

export default EmailCardBottom;
