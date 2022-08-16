import {
    Container,
    Badge,
    List,
    ListItem, Link
} from "@chakra-ui/react";
import {
    Title,
    Meta, WorkImage
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
                    A Facebook Clone built using React, Redux and Firebase Firestore with Firebase Authentication.
                    Create an account, Sign in, post your life, view others&apos; posts
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
                <WorkImage src='/images/works/facebook-signin.png' alt='sign up page' />
                <WorkImage src='/images/works/facebook-home.png' alt='home page' />
            </Container>
        </Layout>
    )
}
export default Work