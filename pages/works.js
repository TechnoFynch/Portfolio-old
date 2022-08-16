import {
    Container,
    Heading,
    SimpleGrid
} from "@chakra-ui/react";
import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item";
import thumbpetPapa from '../public/images/works/petPapa.png'
import thumbSls from '../public/images/works/sls-showcase.png'
import thumbDrone from '../public/images/works/drone-swarm-showcase.png'
import thumbMovie from '../public/images/works/movie-showcase.png'
import thumbFacebook from "../public/images/works/facebook-clone-thumb.png"
import Layout from "../components/layouts/article";

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem id='petpapa' title='Pet Papa' thumbnail={thumbpetPapa}>
                            From suggesting daily activities to making appointments and advice you with notifications, we&apos;ve got it all packed in here.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id='lighting-automation' title='Lighting Automation' thumbnail={thumbSls}>
                            Smart Lighting Solution for your home, right at your fingertips!
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id='drone-swarm' title='Drone Swarm' thumbnail={thumbDrone}>
                            Intelligent Drone Swarm for surveillance and rescue operations
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id='movie-corner' title='Movie Corner' thumbnail={thumbMovie}>
                            React JS &amp; TMDB API Movie Information
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id='facebook-clone' title='Facebook Clone' thumbnail={thumbFacebook}>
                            Facebook Clone
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works