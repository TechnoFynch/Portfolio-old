import NextLink from "next/link";
import {
    Container,
    Box,
    Heading,
    Image,
    Link,
    Button,
    ListItem,
    List,
    useColorModeValue
} from "@chakra-ui/react";
import Section from '../components/section'
import Paragraph from "../components/paragraph";
import {ChevronRightIcon, Icon} from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin
} from "react-icons/io5";

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align='center'>
                    Hello, I&apos;m a Laravel Developer based in India
                </Box>

                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as='h2' variant='page-title'>
                            Shubham Salunke
                        </Heading>
                        <p>Comik Storm ( Student / Developer / Problem Solver )</p>
                    </Box>

                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{md: 6}}
                        align='center'
                    >
                        <Image
                            borderColor='whiteAlpha.800'
                            borderWidth={2}
                            borderStyle='solid'
                            maxWidth='100px'
                            display='inline-block'
                            borderRadius='full'
                            src="/images/deer.jpg"
                            alt='Profile Image'
                        />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as='h3' variant='section-title'>
                        Work
                    </Heading>
                    <Paragraph>
                        I am an IT student based in India with a passion for web and mobile development.
                        I have a knack for solving complex real-life problems using the power of technology.
                        I&apos;m an overall energetic guy, so when I am not in front of my laptop, you&apos;ll find me
                        on the field.
                        Currently, I am working on a cutting edge{' '}
                        <NextLink href='/works/petpapa'><Link>Drone Swarm</Link></NextLink>
                        {' '}technology with my team.
                    </Paragraph>
                    <Box align='center' my={4}>
                        <NextLink href='/works'>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as='h3' variant='section-title'>
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2001</BioYear>
                        Born in Vadodara, Gujarat, India.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019-2023</BioYear>
                        BTech IT from Navrachana University
                    </BioSection>
                    <BioSection>
                        <BioYear>Jan 2022 - Mar 2022</BioYear>
                        Web Dev Intern at Omrook Industries Ltd.
                    </BioSection>
                    <BioSection>
                        <BioYear>May 2022 - Current</BioYear>
                        Laravel Intern at Vardaam Web Solutions
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as='h3' variant='section-title'>
                        I ❤
                    </Heading>
                    <Paragraph>
                        Gaming, Music (All Time Low!), Playing Guitar, Soccer, IoT Automation
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as='h3' variant='section-title'>
                        Find me
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href='https://github.com/Comik-Storm'>
                                <Button
                                    variant='ghost'
                                    colorScheme='teal'
                                    leftIcon={<Icon as={IoLogoGithub} />}>
                                    @ComikStorm
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://www.linkedin.com/in/shubham-salunke-389863176/'>
                                <Button
                                    variant='ghost'
                                    colorScheme='teal'
                                    leftIcon={<Icon as={IoLogoLinkedin} />}>
                                    @Shubham Salunke
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://www.instagram.com/salunkejr/'>
                                <Button
                                    variant='ghost'
                                    colorScheme='teal'
                                    leftIcon={<Icon as={IoLogoInstagram} />}>
                                    @salunkejr
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    );
}

export default Page