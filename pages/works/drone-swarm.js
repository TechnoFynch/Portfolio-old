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
        <Layout title="Drone Swarm">
            <Container>
                <Title>
                    Drone Swarm
                    <Badge>
                        2022
                    </Badge>
                </Title>
                <P>
                    Coveting the need for supercharging rescue operations for National Disaster Rescue Force (NDRF) Teams.
                    We wish to apply the power of Internet of Things superimposed with Machine Learning to a Swarm of Drones
                    that will allow Disaster Rescue Forces to cover more ground and save more lives by traversing the disaster
                    affected regions and quickly informing the concerned authorities of any refugees&apos; or victims&apos; location,
                    providing for faster rescue operations.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Linux, FlytOS, Jetson Nano</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, FlytBase API</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Status</Meta>
                        <span>Started</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}
export default Work