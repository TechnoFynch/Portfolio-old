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
        <Layout title="Movie Corner">
            <Container>
                <Title>
                    Movie Corner
                    <Badge>
                        2022
                    </Badge>
                </Title>
                <P>
                    React JS Starter Project with which you get the most popular movies released along with their meta data.
                    Also lets you search for your favorite movies.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://comik-storm.github.io/movie-corner" target="_blank">
                            https://comik-storm.github.io/movie-corner
                            <ExternalLinkIcon mx='2px' />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web browser</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React JS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Status</Meta>
                        <span>Completed</span>
                    </ListItem>
                </List>
                <WorkImage src='/images/works/movie-home.png' alt='Movie Corner Home' />
                <WorkImage src='/images/works/movie-details.png' alt='Movie Corner Details' />
                <WorkImage src='/images/works/movie-search.png' alt='Movie Corner Search' />
            </Container>
        </Layout>
    )
}
export default Work