import {
    Container,
    Heading,
    SimpleGrid
} from "@chakra-ui/react";
import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item";
import hackathon from "../public/images/achievements/hackathon.png"
import Layout from "../components/layouts/article";

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    Achievements
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem id='hackathon' title='Hackathon' thumbnail={hackathon}>
                            &apos;Best Rookie Hack&apos; Position in NUVYUVA 2022
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id='subroto' title='International Tournament' thumbnail={hackathon}>
                            Participated in the International Subroto Cup Football Tournament in 2016
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works