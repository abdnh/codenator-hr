import { useRouter } from 'next/router';
import Navbar from '../../components/home/Navbar';

import { Row, Container, Col } from "react-bootstrap";

import ContainerLayout from '../../layouts/ContainerLayout';
import Item from "../../components/job/Item";
import Banner from "../../components/job/Banner";


export async function getStaticProps({ params }) {
    const results = await (await fetch(`${process.env.JSON_SERVER}/jobs?id=${params.id}`)).json();
    const post = results[0];
    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const paths = [{
        params: { id: '1' }
    }];
    return {
        paths,
        fallback: true,
    };
}


export default function JobView({ post }) {
    const router = useRouter()

    return (<>
        <Navbar dark={false} />
        <Banner title={post.title} />
        <ContainerLayout subtitle={post.title}>
            <Container>
                <Row>
                    <Col>
                        <Item title={post.title} text={post.text} iconSrc="/favicon.svg" />
                    </Col>
                </Row>
            </Container>

        </ContainerLayout>
    </>
    )
}
