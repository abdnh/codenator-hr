import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { message, Form, Button, Row, Col, Input } from "antd";


import Banner from "../../../components/job/Banner";
import HomeLayout from '../../../layouts/HomeLayout';
import ContainerLayout from "../../../layouts/ContainerLayout";
import { getJob, getAllJobs } from "../../../lib/job";
import useUser from "../../../lib/useUser";
import { postJSON } from "../../../lib/request";

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


export default function Apply({ job }) {
    const router = useRouter();
    const { user } = useUser({
        redirectTo: '/login'
    });
    const [profileData, setProfileData] = useState({});
    const [application, setApplication] = useState(null);
    const [form] = Form.useForm();
    useEffect(() => form.resetFields(), [form, user, application]);

    useEffect(() => {
        if (!user || !user.id) return;
        async function fetchProfile() {
            const data = await (await fetch(`/api/profile?id=${user.id}`, {
                method: "GET",
                headers: { 'Content-Type': 'application/json' },
            })).json();
            setProfileData(data);
        }
        fetchProfile();
    }, [user]);

    useEffect(() => {
        if (profileData && profileData.tabIndex !== undefined && profileData.tabIndex != 4) {
            message.warning("You've not completed your profile yet");
            router.push('/profile');
        }
    }, [profileData, router]);

    useEffect(() => {
        if (application && application.userID) {
            message.info("You've already applied to this job");
        }
    }, [application]);


    useEffect(() => {
        if (!user || !user.id) return;
        async function fetchApplication() {
            const data = await (await fetch(`/api/application?userID=${user.id}&jobID=${job.id}`, {
                method: "GET",
                headers: { 'Content-Type': 'application/json' },
            })).json();
            setApplication(data);
        }
        fetchApplication();
    }, [job, user]);

    async function onFinish(values) {
        console.log('onFinish', values);
        const applicationData = {
            id: application?.id,
            userID: user.id,
            jobID: job.id,
            coverLetter: values.coverLetter,
        }
        postJSON('/api/application', applicationData, applicationData.id ? "PATCH" : "POST").then(res => res.json()).then((data) => {
            if (data.ok) {
                message.success("Your application was submitted successfully");
            } else {
                message.error("Failed to submit your application" + (data.message ? `:${data.message}` : ''));
            }
        }
        ).catch((e) => message.error(`Failed to submit your application: ${e}`));
    };

    function onFinishFailed(errorInfo) {
        console.log('onFinishFailed:', errorInfo);
    };

    if (!user || !profileData) {
        return (
            <p>
                Loading...
            </p>
        )
    }

    if (!user.loggedIn) {
        return (
            <p>
                Redirecting...
            </p>
        )
    }

    return (
        <HomeLayout navbarProps={{ dark: false }}>
            <Banner title={`Apply to ${job.title}`} />
            <ContainerLayout subtitle={`Apply to ${job.title}`}>
                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={{
                        coverLetter: application ? application.coverLetter : ''
                    }}
                >
                    <Row gutter={16} >
                        <Col span={24}>
                            <Form.Item
                                label="Cover Letter"
                                labelCol={{ span: 24 }}
                                name="coverLetter"
                                rules={[
                                    {
                                        required: true,
                                        message: "Cover letter is required"
                                    },
                                ]}
                            >
                                <Input.TextArea />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16} >
                        <Col span={24}>
                            <Form.Item wrapperCol={{ span: 24 }}>
                                <Button type="primary" htmlType="submit" style={{ display: 'block', margin: '0 auto', minWidth: '50%' }}>{application ? "Update Application" : "Apply"}</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </ContainerLayout>
            <style global jsx>
                {
                    `
                .ant-form-item-label {
                    text-align: center !important;
                }
                `
                }
            </style>
        </HomeLayout>
    )
}
