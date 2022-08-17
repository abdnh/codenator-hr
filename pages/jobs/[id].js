
import { Row, Container, Col } from "react-bootstrap";

import Item from "../../components/job/Item";
import Banner from "../../components/job/Banner";
import MainLayout from '../../layouts/MainLayout';
import HomeLayout from '../../layouts/HomeLayout';
import { getJob, getAllJobs } from "../../lib/job";


export async function getStaticProps({ params }) {
    const job = await getJob(params.id);
    return {
        props: {
            job,
        },
    };
}

export async function getStaticPaths() {
    const jobs = await getAllJobs()
    const paths = jobs.map((job) => (
        {
            params: { id: job.id.toString() }
        }
    ));
    return {
        paths,
        fallback: true,
    };
}


export default function JobView({ job }) {

    return (
        <HomeLayout navbarProps={{ dark: false }}>
            <Banner title={job.title} />

            <MainLayout subtitle={job.title}>
                <Container>
                    <Row>
                        <Col>
                            <Item title={job.title} text={job.text} iconSrc="/favicon.svg" />
                        </Col>
                    </Row>
                </Container>

            </MainLayout>
        </HomeLayout>
    )
}
