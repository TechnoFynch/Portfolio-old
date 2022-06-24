import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
    Title,
    WorkImage,
    Meta
} from '../../components/work'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Pet Papa">
            <Container>
                <Title>
                    Pet Papa
                    <Badge>
                        2022
                    </Badge>
                </Title>
                <P>
                    With this app on your phone, no more need to worry about your
                    pet&apos;s health and hygiene, because we do that for you.
                    From suggesting daily activities to making vet appointments
                    and advice you with notifications, we&apos;ve got it all
                    packed in here.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="/">
                            https://bit.ly/3sZKRTF
                            <ExternalLinkIcon mx='2px' />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android (IOS coming soon!)</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React Native, Expo CLI</span>
                    </ListItem>
                </List>
                <WorkImage src='/images/works/petpapa-showcase.png' alt='petpapa' />
            </Container>
        </Layout>
    )
}
export default Work