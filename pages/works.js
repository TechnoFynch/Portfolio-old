import {
    Container,
    Heading,
    SimpleGrid
} from "@chakra-ui/react";
import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item";
import thumbpetPapa from '../public/images/works/petPapa.png'
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
                            From suggesting daily activities to making appointments and advice you with notifications, we've got it all packed in here.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works