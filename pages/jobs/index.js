import { useState } from 'react';

import Navbar from '../../components/home/Navbar';

import Container from "react-bootstrap/Container";
import { SearchOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Form, Input, Pagination } from "antd";


import JobRow from "../../components/JobList/JobRow";
import Banner from "../../components/JobList/Banner";
import MainLayout from '../../layouts/MainLayout';

import { getAllJobs } from "../../lib/job";


export async function getStaticProps() {
    const jobs = await getAllJobs();
    return {
        props: {
            jobs,
        },
    };
}


function SearchRow({ onChange }) {
    return (
        <Row>
            <Col className="mt-3" span={22} offset={1}>
                <Form>
                    <Form.Item name="search">
                        <Input onChange={onChange} suffix={<SearchOutlined />} placeholder="Search jobs" style={{ height: 64 }} />
                    </Form.Item>
                </Form>
            </Col>
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
        </Row>
    )
}

export default function JobList(props) {
    const pageSize = props.pageSize || 2;
    const [page, setPage] = useState(props.page || 1);
    const [jobs, setJobs] = useState(props.jobs || []);

    function onPageChange(page, pageSize) {
        setPage(page);
    }

    async function onSearch(e) {
        const query = e.target.value;
        const results = await (await fetch(`/api/jobs?q=${query}`)).json();
        setJobs(results);
    }

    return (<>
        <Navbar dark={false} />
        <Banner title="Open Positions" id="banner" />

        <MainLayout subtitle="Open Positions">
            <Container fluid="md" className="py-5" >
                <SearchRow onChange={onSearch} />

                <div id="results">
                    {jobs.slice((page - 1) * pageSize, page * pageSize).map((job) => (
                        // TODO: get icon from job
                        <JobRow key={job.id} job={job} icon={<FontAwesomeIcon icon={faDatabase} />} />
                    ))}

                    <Pagination defaultCurrent={page} current={page} onChange={onPageChange} total={jobs.length} defaultPageSize={pageSize} className="text-center" />
                </div>

                <style global jsx>{`
                    #results {
                        {/* border: solid gray 1px; */}
                        {/* border-radius: 32px;
                        box-shadow: 1px 1px 8px #77a7af; */}
                        {/* background-color: #f5f5f5; */}
                        margin-block: 8px;
                    }
                    #banner {
                        font-size: 64px !important;
                    }
                    body {
                        background-color: #fff;
                    }
                }    
            `}</style>
            </Container>

        </MainLayout>
    </>
    )
}

