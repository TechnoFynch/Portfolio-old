import {
    Container,
    Badge,
    List,
    ListItem
} from "@chakra-ui/react";
import {
    Title,
    Meta
} from '../../components/work'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Pet Papa">
            <Container>
                <Title>
                    Smart Lighting Automation
                    <Badge>
                        2022
                    </Badge>
                </Title>
                <P>
                    Afraid of going in the dark without switching on the lights?
                    Fear no more, with this IoT solution, you can turn lights on/off using your smartphone and our telegram bot.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Any device that can run Telegram</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, Telegram API</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}
export default Work