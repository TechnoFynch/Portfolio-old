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
                    Achievements (Images to be uploaded)
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
                    <Section delay={0.3}>
                        <WorkGridItem id='rfys' title='RFYS Athletics' thumbnail={hackathon}>
                            Secured second position in the National Reliance Federation Youth Sports 4x400m relay
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id='toi' title='TOI T20 Soccer' thumbnail={hackathon}>
                            Participated in multiple Times of India T20 Soccer Tournaments
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id='local' title='Best Athlete' thumbnail={hackathon}>
                            Broke 3 school records in 200m, 400m, 4x100m relay events,
                            Secured Athlete of the Year 2018
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works