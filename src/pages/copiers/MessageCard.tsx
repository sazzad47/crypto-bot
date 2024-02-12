import { Card, Container, Header, Image, List, ListContent, ListIcon, ListItem } from 'semantic-ui-react';

import hand from '../../assets/images/hand-with-plant.svg';
import rightImg from '../../assets/images/man-with-tree.png';

const MessageCard = () => {
    return (
        <Container className="message-card">
            <Card>
                <div className="circular-img">
                    <Image src={hand} />
                </div>
                <div className="msg-box">
                    <Header as="h1">Financial Freedom </Header>
                    <p>
                        It is our mission to help people find financial freedom through strategic automated crypto
                        investing. Our desire is to get you back doing:
                    </p>
                    <List>
                        <ListItem>
                            <ListIcon name="heart outline" />
                            <ListContent>What you're good at</ListContent>
                        </ListItem>
                        <ListItem>
                            <ListIcon name="heart outline" />
                            <ListContent>What you've always wanted to do</ListContent>
                        </ListItem>
                        <ListItem>
                            <ListIcon name="heart outline" />
                            <ListContent>What you love to do</ListContent>
                        </ListItem>
                    </List>
                </div>

                <div className="right-img">
                    <Image src={rightImg} />
                </div>
            </Card>
        </Container>
    );
};

export default MessageCard;
