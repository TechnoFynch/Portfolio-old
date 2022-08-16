import {
    Container,
    Badge,
    List,
    ListItem, Link
} from "@chakra-ui/react";
import {
    Title,
    Meta
} from '../../components/work'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const Work = () => {
    return (
        <Layout title="Facebook Clone">
            <Container>
                <Title>
                    Facebook Clone
                    <Badge>
                        2022
                    </Badge>
                </Title>
                <P>
                    A Facebook Clone, built using React, Redux and Firebase Firestore, Firebase Authentication
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://shubham-fb-clone.netlify.app/" target="_blank">
                            https://shubham-fb-clone.netlify.app/
                            <ExternalLinkIcon mx='2px' />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web browser</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React JS, REDUX, Firebase Firestore</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Status</Meta>
                        <span>Completed</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}
export default Work