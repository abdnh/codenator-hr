import { useState } from "react";

import { Upload, DatePicker, InputNumber, Button, Form, Input, Row, Col, Select, Space, Tabs, Steps } from 'antd';
import { UploadOutlined, MinusCircleOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
const { Option } = Select;
const { Step } = Steps;


import { Mortarboard, InfoCircle, Briefcase } from "react-bootstrap-icons";
import ReferenceIcon from "../assets/icons/reference.svg";
import ResumeIcon from "../assets/icons/resume.svg";


import ContainerLayout from '../layouts/ContainerLayout';
import Divider from "../components/ant/Divider";
import PlusButton from "../components/ant/PlusButton";
import PhoneInput from "../components/ant/PhoneInput";
import CountrySelector from "../components/ant/CountrySelector";
import StateSelector from "../components/ant/StateSelector";
import CitySelector from "../components/ant/CitySelector";
import Banner from "../components/profile/Banner";
import Navbar from "../components/home/Navbar";

import { getAllCountries } from "../lib/country";
import useUser from "../lib/useUser";


const REQUIRED_MESSAGE = "This field is required";


export function getStaticProps() {
    const countries = getAllCountries();
    return {
        props: {
            countries,
        }
    }
}


function BasicForm({ countries }) {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    // A cache of all fetched states & cities
    const [countryData, setCountryData] = useState({});

    async function onCountryChange(countryName) {
        setSelectedCountry(countryName);
        const countryCode = countries[countryName]?.isoCode;
        if (!countryCode || countryData[countryCode]) {
            return;
        }
        const states = await (await fetch(`/api/states?countryCode=${countryCode}`, {
            method: "GET",
        })).json();

        const copy = Object.assign({}, countryData);
        copy[countryCode] = { states };
        setCountryData(copy);

        // FIXME: doesn't work
        setSelectedState('');
        setSelectedCity('');
    }

    async function onStateChange(stateName) {
        const countryCode = countries[selectedCountry]?.isoCode;
        setSelectedState(stateName);
        if (!countryCode) return;
        if (countryData[countryCode].cities) {
            return;
        }
        const stateCode = countryData[countryCode]?.states[stateName]?.isoCode;
        if (!stateCode) return;
        const cities = await (await fetch(`/api/cities?countryCode=${countryCode}&stateCode=${stateCode}`, {
            method: "GET",
        })).json();
        const copy = Object.assign({}, countryData);
        copy[countryCode].cities = cities;
        setCountryData(copy)

        setSelectedCity('');

    }

    function onCityChange(value) {
        setSelectedCity(value);
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <TabbedForm>
        <Form
            name="basic"
            // labelCol={{
            //     span: 24,
            // }}
            // wrapperCol={{
            //     span: 16,
            // }}
            initialValues={{
                email: "foo@example.com",
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            {/* <Row gutter={24} className={"mb-4"}>
                <Col span={24} offset={0}>
                    <ProfileImage />
                </Col>
            </Row> */}
            <Divider>Basic</Divider>
            <Row gutter={24}>
                <Col span={8}>
                    <Form.Item
                        label="First Name"
                        labelCol={{ span: 24 }}
                        name="first_name"
                        rules={[
                            {
                                required: true,
                                message: REQUIRED_MESSAGE,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item
                        label="Middle Name"
                        labelCol={{ span: 24 }}

                        name="middle_name"
                        rules={[
                            {
                                required: false,
                                message: REQUIRED_MESSAGE,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item
                        label="Last Name"
                        labelCol={{ span: 24 }}

                        name="last_name"
                        rules={[
                            {
                                required: true,
                                message: REQUIRED_MESSAGE,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>

            </Row>


            <Row gutter={24}>
                <Col span={8}>
                    <Form.Item name="gender" label="Gender" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                        <Select
                        >
                            <Select.Option value="male">male</Select.Option>
                            <Select.Option value="female">female</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item name="email" label="Email" labelCol={{ span: 24 }} rules={[{ required: true, type: "email" }]}>
                        <Input disabled />
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <PhoneInput countries={countries} />
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={24}>
                    <Form.Item name="birth_date" label="Birth Date" labelCol={{ span: 6 }} rules={[{ required: true, type: "date" }]}>
                        <DatePicker />
                    </Form.Item>
                </Col>
            </Row>

            <Divider >Address</Divider>
            <Row gutter={24}>
                <Col span={8}>
                    <CountrySelector countries={countries} onChange={onCountryChange} />
                </Col>
                <Col span={8}>
                    <StateSelector states={countryData[countries[selectedCountry]?.isoCode]?.states} onChange={onStateChange} />
                </Col>
                <Col span={8}>
                    <CitySelector cities={countryData[countries[selectedCountry]?.isoCode]?.cities} onChange={onCityChange} />
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={16}>
                    <Form.Item name="address" label="Address" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="zip_code" label="Zip Code" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Divider >Citizenship</Divider>
            <Form.List name="citizenships" initialValue={[
                { conutry: "foo", citizenship_reason: "By birth" }
            ]}>
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Row gutter={20} key={key}>
                                <Col span={11}>
                                    <CountrySelector {...restField} countries={countries} name={[name, 'country']} label="Country" labelCol={{ span: 24 }} rules={[{ required: true }]} />
                                </Col>
                                <Col span={11}>
                                    <Form.Item {...restField} name={[name, 'citizenship_reason']} label="How did you obtain this citizenship?" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                                        <Select>
                                            <Option value="By birth"></Option>
                                            <Option value="By application"></Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={2}>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Col>
                            </Row>

                        ))}
                        <Form.Item>
                            <PlusButton onClick={() => add()} />
                        </Form.Item>
                    </>
                )}
            </Form.List>

        </Form>
    </TabbedForm>
}

function TabbedForm({ children }) {
    return (
        <div>
            {children}
            <Button type="primary" style={{ float: 'right', marginBottom: 32 }}>Save</Button>
        </div>
    )
}

function EducationForm() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <TabbedForm>
        <Form
            name="education"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >


            <Divider >Degrees</Divider>
            <Form.List name="degrees" initialValue={[
                { conutry: "foo", citizenship_reason: "By birth" }
            ]}>
                {(fields, { add, remove }) => (
                    <Space direction="vertical">
                        {fields.map(({ key, name, ...restField }) => (
                            <div key={key}>
                                <Row gutter={20}>
                                    <Col span={8}>
                                        <Form.Item {...restField} name={[name, 'university']} label="University" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item {...restField} name={[name, 'faculty']} label="Faculty" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item {...restField} name={[name, 'branch']} label="Branch" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={20}>

                                    <Col span={6}>
                                        <Form.Item {...restField} name={[name, 'score']} label="Score" labelCol={{ span: 24 }} rules={[{ required: true, type: "number" }]}>
                                            <InputNumber min={0} max={100} />
                                        </Form.Item>
                                    </Col>

                                    <Col span={6}>
                                        <Form.Item {...restField} name={[name, 'enrollment_date']} label="Enrollment Date" labelCol={{ span: 24 }} rules={[{ required: true, type: "date" }]}>
                                            <DatePicker />
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item {...restField} name={[name, 'graduation_date']} label="Graduation Date" labelCol={{ span: 24 }} rules={[{ required: true, type: "date" }]}>
                                            <DatePicker />
                                        </Form.Item>
                                    </Col>

                                    <Col span={24}>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Col>
                                </Row>
                            </div>
                        ))}
                        <Form.Item>
                            <PlusButton onClick={() => add()} />
                        </Form.Item>
                    </Space>
                )}
            </Form.List>

            <Divider >Certifications</Divider>
            <Form.List name="certifications" initialValue={[
                // TODO
            ]}>
                {(fields, { add, remove }) => (
                    <Space direction="vertical">
                        {fields.map(({ key, name, ...restField }) => (
                            <Row gutter={20} key={key}>
                                <Col span={6}>
                                    <Form.Item {...restField} name={[name, 'institute']} label="Institute" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item {...restField} name={[name, 'issuing_date']} label="Issuing Date" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                                        <DatePicker />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item {...restField} name={[name, 'certification_upload']} label="&nbsp;" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                                        {/* <Input /> */}
                                        <Upload>
                                            <Button icon={<UploadOutlined />}>Upload</Button>
                                        </Upload>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Col>
                            </Row>
                        ))}
                        <Form.Item>
                            <PlusButton onClick={() => add()} />
                        </Form.Item>
                    </Space>
                )}
            </Form.List>

            <Divider >Languages</Divider>
            <Form.List name="languages" initialValue={[
                // TODO
            ]}>
                {(fields, { add, remove }) => (
                    <Space direction="vertical">
                        {fields.map(({ key, name, ...restField }) => (
                            <Row gutter={20} key={key}>
                                <Col span={6}>
                                    <Form.Item {...restField} name={[name, 'language']} label="Language" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item {...restField} name={[name, 'level']} label="Level" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                                        <Select>
                                            <Option value="beginner">Beginner</Option>
                                            <Option value="intermediate">Intermediate</Option>
                                            <Option value="advanced">Advanced</Option>
                                            <Option value="native">Native</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item {...restField} name={[name, 'lang_certif_upload']} label="&nbsp;" labelCol={{ span: 24 }} rules={[{ required: false }]}>
                                        {/* <Input /> */}
                                        <Upload>
                                            <Button icon={<UploadOutlined />}>Upload</Button>
                                        </Upload>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Col>
                            </Row>
                        ))}
                        <Form.Item>
                            <PlusButton onClick={() => add()} />
                        </Form.Item>
                    </Space>
                )}
            </Form.List>
        </Form>
    </TabbedForm>
}

function WorkForm({ countries }) {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <TabbedForm>
        <Form
            name="work"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >


            <Divider >Jobs</Divider>
            <Form.List name="jobs" initialValue={[
                // TODO
                {}
            ]}>
                {(fields, { add, remove }) => (
                    <Space direction="vertical">
                        {fields.map(({ key, name, ...restField }) => (
                            <div key={key}>
                                <Row gutter={20} >
                                    <Col span={8}>
                                        <Form.Item {...restField} name={[name, 'employer']} label="Employer name / Company" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <PhoneInput {...restField} countries={countries} name="employer_phone" fieldName={name} label="Phone Number" labelCol={{ span: 24 }} rules={[{ required: true }]} />
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item {...restField} name={[name, 'job_title']} label="Your Job Title" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={20} >
                                    <Col span={8}>
                                        <Form.Item {...restField} name={[name, 'job_start_date']} label="Start Date" labelCol={{ span: 24 }} rules={[{ required: true, type: "date" }]}>
                                            <DatePicker />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item {...restField} name={[name, 'job_end_date']} label="End Date" labelCol={{ span: 24 }} rules={[{ required: true, type: "date" }]}>
                                            <DatePicker />
                                        </Form.Item>
                                    </Col>

                                    <Col span={8}>
                                        <Form.Item {...restField} name={[name, 'job_salary']} label="Salary" labelCol={{ span: 24 }} rules={[{ required: true, type: "number" }]}>
                                            <InputNumber prefix="$" />
                                        </Form.Item>
                                    </Col>


                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <Form.Item {...restField} name={[name, 'job_responsibilities']} label="Please talk about your responsibilities and experiences in this job" labelCol={{ span: 24 }} rules={[{ required: false }]}>
                                            <Input.TextArea />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Col>
                                </Row>

                            </div>
                        ))}
                        <Form.Item>
                            <PlusButton onClick={() => add()} />
                        </Form.Item>
                    </Space>
                )}
            </Form.List>
        </Form>
    </TabbedForm>
}

function ReferencesForm({ countries }) {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <TabbedForm>
        <Form
            name="references"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >


            <Divider >References</Divider>
            <Form.List name="references" initialValue={[
                // TODO
                {}
            ]}>
                {(fields, { add, remove }) => (
                    <Space direction="vertical">
                        {fields.map(({ key, name, ...restField }) => (
                            <div key={key}>
                                <Row gutter={20} >
                                    <Col span={8}>
                                        <Form.Item
                                            {...restField}
                                            label="First Name"
                                            labelCol={{ span: 24 }}
                                            name={[name, "first_name"]}
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>

                                    <Col span={8}>
                                        <Form.Item
                                            {...restField}
                                            label="Middle Name"
                                            labelCol={{ span: 24 }}
                                            name={[name, "middle_name"]}
                                            rules={[
                                                {
                                                    required: false,
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>

                                    <Col span={8}>
                                        <Form.Item
                                            {...restField}
                                            label="Last Name"
                                            labelCol={{ span: 24 }}
                                            name={[name, "last_name"]}
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={20} >
                                    <Col span={8}>
                                        <Form.Item {...restField} name={[name, 'reference_occupation']} label="Occupation" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item {...restField} name={[name, 'reference_email']} label="Email" labelCol={{ span: 24 }} rules={[{ required: true, type: "email" }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <PhoneInput countries={countries} name="reference_phone" fieldName={name} />
                                    </Col>


                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Col>
                                </Row>
                            </div>
                        ))}
                        <Form.Item>
                            <PlusButton onClick={() => add()} />
                        </Form.Item>
                    </Space>
                )}
            </Form.List>
        </Form>
    </TabbedForm>
}

function CVForm() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <TabbedForm>
        <Form
            name="cv"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >


            <Divider >CV</Divider>
            <Space direction="vertical">

                <Row gutter={20} >
                    <Col span={24}>
                        <Form.Item
                            label="Upload your CV"
                            labelCol={{ span: 24 }}
                            name="cv"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <CVUpload />
                        </Form.Item>
                    </Col>

                </Row>
                {/* FIXME: cover letter should be uploaded when actually applying to a job */}
                <Row gutter={20} >
                    <Col span={24}>
                        <Form.Item
                            label="Cover Letter"
                            labelCol={{ span: 24 }}
                            name="cover_letter"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input.TextArea />
                        </Form.Item>
                    </Col>
                </Row>
            </Space>

        </Form>
    </TabbedForm>
}

function CVUpload(props) {
    // TODO: only accept certain formats like PDF and DOCX
    function onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
            console.log(file, fileList);
        }
    }

    return <Upload action='/api/test'
        onChange={onChange}
        showUploadList={{
            showDownloadIcon: true,
            downloadIcon: 'Download',
            showRemoveIcon: true,
            removeIcon: <MinusCircleOutlined onClick={(e) => console.log(e, 'custom removeIcon event')} />,
        }}
        {...props}>
        <Button icon={
            <UploadOutlined />}> Upload
        </Button >
    </Upload >
}



export default function Profile({ countries }) {
    const { user } = useUser({
        redirectTo: '/login'
    });
    const [current, setCurrent] = useState(0);
    function onChange(value) {
        console.log('onChange:', current);
        setCurrent(value);
    };

    if (!user || !user.loggedIn) {
        return (
            <p>
                Redirecting...
            </p>
        )
    }

    return (<>
        <Navbar dark={false} />
        <Banner title="Profile" id="banner" />
        <ContainerLayout subtitle="Profile">
            <Steps current={current} onChange={onChange}>
                <Step title="Biography" icon={<InfoCircle />} description="&nbsp;" />
                <Step title="Education" icon={<Mortarboard />} description="&nbsp;" />
                <Step title="Work Experience" icon={<Briefcase />} description="&nbsp;" />
                <Step title="References" icon={<ReferenceIcon width={24} height={24} />} description="&nbsp;" />
                <Step title="CV" icon={<ResumeIcon width={24} height={24} />} description="&nbsp;" />
            </Steps>
            <Tabs defaultActiveKey={current} activeKey={current.toString()}>
                <TabPane tab={"Tab 1"} key={0}>
                    <BasicForm countries={countries} />
                </TabPane>
                <TabPane tab={"Tab 2"} key={1}>
                    <EducationForm />
                </TabPane>
                <TabPane tab={"Tab 3"} key={2}>
                    <WorkForm countries={countries} />
                </TabPane>
                <TabPane tab={"Tab 4"} key={3}>
                    <ReferencesForm countries={countries} />
                </TabPane>
                <TabPane tab={"Tab 5"} key={4}>
                    <CVForm />
                </TabPane>


            </Tabs>
            <style global jsx>
                {
                    `
                .container {
                    margin-top: 64px;
                }
                .ant-tabs-nav-list {
                    display: none !important;
                }
                .ant-tabs-content-holder {
                    margin: 32px auto !important;
                    text-align: center !important;
                }
                .ant-steps {
                    padding-inline: 36px;
                }
                .ant-form-item-label {
                    text-align: center !important;
                }
                `
                }
            </style>

        </ContainerLayout>
    </>
    )

};

