import { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import { SearchOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Form, Input, Pagination, Checkbox } from "antd";


import JobRow from "../../components/JobList/JobRow";
import Banner from "../../components/JobList/Banner";
import MainLayout from '../../layouts/MainLayout';
import HomeLayout from '../../layouts/HomeLayout';

import { getAllJobs } from "../../lib/job";
import { useRouter } from 'next/router';


export async function getStaticProps() {
    const jobs = await getAllJobs();    
    return {
        props: {
            jobs,
        },
    };
}


function Searchbar({ onChange }) {
    return (
        <>
            <Form>
                <Form.Item name="search">
                    <Input onChange={onChange} suffix={<SearchOutlined />} placeholder="Search jobs" style={{ height: 64 }} />
                </Form.Item>
            </Form>

            <style global jsx>{
                `
            .ant-input, .ant-input-affix-wrapper {
                background-color: #fff;
            }
            .ant-input::placeholder {
                color: black;
            }
            `
            }
            </style>
        </>
    )
}

export default function JobList(props) {
    const router = useRouter();
    const pageSize = props.pageSize || 2;
    const [page, setPage] = useState(props.page || 1);
    const [jobs, setJobs] = useState(props.jobs || []);
    const [enabledTypes, setEnabledTypes] = useState(new Set());
    const [search, setSearch] = useState('');

    useEffect(() => {
        let filteredJobs = props.jobs.slice();
        filteredJobs = filteredJobs.filter(job => enabledTypes.has(job.type) && (!search || (search && (job.title.toUpperCase().includes(search) || job.text.toUpperCase().includes(search)))));
        setJobs(filteredJobs);
    }, [enabledTypes, search, props.jobs]);

    useEffect(() => {
        let types = router.query.types?.split(',').map(t => Number.parseInt(t));
        if (!types) types = [0, 1];
        const newEnabledTypes = new Set();
        types.forEach((i) => newEnabledTypes.add(i));
        setEnabledTypes(newEnabledTypes);
    }, [router.query.types]);

    function onPageChange(page, pageSize) {
        setPage(page);
    }

    async function onSearch(e) {
        setSearch(e.target.value.toUpperCase());
    }

    function onCheckboxChanged(i) {
        const newEnabledTypes = new Set(enabledTypes);
        if (newEnabledTypes.has(i)) {
            newEnabledTypes.delete(i);
        } else {
            newEnabledTypes.add(i);
        }
        setEnabledTypes(newEnabledTypes);
        setPage(1);
    }

    return (<>

        <HomeLayout navbarProps={{ dark: false }}>
            <Banner title="Open Positions" id="banner" />

            <MainLayout subtitle="Open Positions">
                <Container fluid="md" className="py-5" >
                    <Row gutter={16}>
                        <Col span={24} className="text-center"><Searchbar onChange={onSearch} /></Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24} className="text-center">
                            <Checkbox onChange={(e) => onCheckboxChanged(0)} checked={enabledTypes.has(0)}>Jobs</Checkbox>
                            <Checkbox onChange={(e) => onCheckboxChanged(1)} checked={enabledTypes.has(1)}>Internships</Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <div id="results" className="flex-5">
                                {/* TODO: use pagination feature of json-server instead of fetching all jobs at once */}
                                {jobs.slice((page - 1) * pageSize, page * pageSize).map((job) => (
                                    <JobRow key={job.id} job={job}/>
                                ))}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Pagination defaultCurrent={page} current={page} onChange={onPageChange} total={jobs.length} defaultPageSize={pageSize} className="text-center" />
                        </Col>
                    </Row>
                </Container>
            </MainLayout>
        </HomeLayout>
        <style global jsx>{`
            #results {
                margin-block: 8px;
            }
            #banner {
                font-size: 64px !important;
            }
            body {
                background-color: #fff;
            }
        `}
        </style>
    </>
    )
}

