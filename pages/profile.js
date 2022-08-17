import { default as React, useEffect, useState } from "react";

import moment from 'moment';

import { Upload, DatePicker, InputNumber, Button, Form, Input, Row, Col, Select, Space, Tabs, Steps, message, Result } from 'antd';
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
import { postJSON } from "../lib/request";
import { uploadDataToAntFile } from "../lib/profile";
import DocumentUpload from "../components/ant/DocumentUpload";
import HobbySelector from "../components/profile/HobbySelector";
import { useRouter } from "next/router";

const REQUIRED_MESSAGE = "This field is required";


export function getStaticProps() {
    const countries = getAllCountries();
    return {
        props: {
            countries,
        }
    }
}

function TabbedForm({ children, tabIndex, user, profileData, countries, onSubmit, ...rest }) {
    const [form] = Form.useForm();
    // Ensure initial field values are updated
    useEffect(() => form.resetFields(), [profileData, user]);


    // Do some processing on submitted values before sending them to server
    async function preprocessSubmission(values) {
        for (const [key, value] of Object.entries(values)) {
            if (!value) continue;
            if (key.includes("upload")) {
                // assume it's a file list and take the first one
                const file = value[0];
                if (!file) {
                    // Do not store the upload key if the array is empty
                    delete values[key];
                    continue;
                }
                const fileObj = file.originFileObj;
                const base64String = window.btoa(String.fromCharCode(...new Uint8Array(await fileObj.arrayBuffer())));
                values[key] = {
                    name: fileObj.name,
                    type: fileObj.type,
                    data: base64String,
                };
            }
            else if (isObject(value)) {
                values[key] = await preprocessSubmission(value);
            }
            else if (Array.isArray(value)) {
                values[key] = await Promise.all(value.map(v => preprocessSubmission(v)));
            }
        }
        return values;
    }

    async function onFinish(values) {

        // We store the email in the user object and only show it here for completeness
        delete values.email;

        values = await preprocessSubmission(values);

        // If the most recently saved tab has a higher index than the currently saved one, do not update the stored tab index
        // so that we correctly provide feedback when the user completes their profile non-linearly
        if (profileData.tabIndex > values.tabIndex) {
            values.tabIndex = profileData.tabIndex;
        }

        console.log('onFinish', values);

        postJSON('/api/profile', { id: user.id, ...values }).then(
            (res) => {
                if (res.ok) {
                    message.success("Successfully saved");
                    onSubmit(values);
                } else {
                    message.error("Failed to save");
                }
            }
        ).catch((e) => message.error(`Failed to save: ${e}`));
    };

    function onFinishFailed(errorInfo) {
        console.log('onFinishFailed:', errorInfo);
    };

    return (
        <Form
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            {...rest}>
            {React.Children.map(children, child => (
                // Pass data to wrapped forms
                React.cloneElement(child, { user, profileData })
            ))}
            <Form.Item name="tabIndex" hidden initialValue={tabIndex}>
                <Input value={tabIndex} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" style={{ float: 'right', marginBottom: 32 }}>Save</Button>
            </Form.Item>
        </Form>
    )
}

function BasicForm({ countries, user, profileData }) {
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

    return <>
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
                    initialValue={profileData.first_name}
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
                    initialValue={profileData.middle_name}

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
                    initialValue={profileData.last_name}
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
                <Form.Item
                    name="gender"
                    label="Gender"
                    labelCol={{ span: 24 }}
                    initialValue={profileData.gender}
                    rules={[{ required: true }]}>
                    <Select
                    >
                        <Select.Option value="male">male</Select.Option>
                        <Select.Option value="female">female</Select.Option>
                    </Select>
                </Form.Item>
            </Col>

            <Col span={8}>
                <Form.Item
                    name="email"
                    label="Email"
                    labelCol={{ span: 24 }}
                    initialValue={user.email}
                    rules={[{ required: true, type: "email" }]}>
                    <Input disabled />
                </Form.Item>
            </Col>

            <Col span={8}>
                <PhoneInput countries={countries} rules={[
                    {
                        required: true,
                        message: REQUIRED_MESSAGE,
                    },
                ]} initialValue={profileData.phone} />
            </Col>
        </Row>

        <Row gutter={24}>
            <Col span={12}>
                <Form.Item
                    name="birth_date"
                    label="Birth Date"
                    labelCol={{ span: 24 }}
                    initialValue={profileData.birth_date}
                    rules={[{ required: true, type: "date" }]}>
                    <DatePicker />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    name="marital_status"
                    label="Marital Status"
                    labelCol={{ span: 24 }}
                    initialValue={profileData.marital_status}
                    rules={[{ required: true }]}>
                    <Select
                    >
                        <Select.Option value="married">Married</Select.Option>
                        <Select.Option value="single">Single</Select.Option>
                        <Select.Option value="other">other</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
        </Row>

        <Divider >Address</Divider>
        <Row gutter={24}>
            <Col span={8}>
                <CountrySelector initialValue={profileData.country} countries={countries} onChange={onCountryChange} />
            </Col>
            <Col span={8}>
                <StateSelector initialValue={profileData.state} states={countryData[countries[selectedCountry]?.isoCode]?.states} onChange={onStateChange} />
            </Col>
            <Col span={8}>
                <CitySelector initialValue={profileData.city} cities={countryData[countries[selectedCountry]?.isoCode]?.cities} onChange={onCityChange} />
            </Col>
        </Row>
        <Row gutter={24}>
            <Col span={16}>
                <Form.Item
                    name="address"
                    label="Address"
                    labelCol={{ span: 24 }}
                    initialValue={profileData.address}
                    rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    name="zip_code"
                    label="Zip Code"
                    labelCol={{ span: 24 }}
                    initialValue={profileData.zip_code}
                    rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Col>
        </Row>

        <Divider >Citizenship</Divider>
        <Form.List name="citizenships" initialValue={profileData.citizenships}>
            {(fields, { add, remove }) => (
                <>
                    {fields.map(({ key, name, ...restField }) => (
                        <Row gutter={20} key={key}>
                            <Col span={11}>
                                <CountrySelector
                                    {...restField}
                                    countries={countries}
                                    name={[name, 'country']}
                                    label="Country"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true }]} />
                            </Col>
                            <Col span={11}>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'citizenship_reason']}
                                    label="How did you obtain this citizenship?"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true }]}>
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
    </>
}

function EducationForm({ user, profileData }) {


    return <>
        <Divider >Degrees</Divider>
        <Form.List name="degrees" initialValue={profileData.degrees}>
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
                                    <Form.Item {...restField} name={[name, 'score']} label="GPA" labelCol={{ span: 24 }} rules={[{ required: true, type: "number" }]}>
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
        <Form.List name="certifications" initialValue={profileData.certifications}>
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
                                <DocumentUpload fieldName={[name, 'certification_upload']} />
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
        <Form.List name="languages" initialValue={profileData.languages}>
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
                                <DocumentUpload fieldName={[name, 'lang_certif_upload']} />
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

        <Divider >Hobbies & Interests</Divider>
        <HobbySelector initialValue={profileData.hobbies} />
    </>
}

function WorkForm({ countries, user, profileData }) {

    return <>
        <Divider >Jobs</Divider>
        <Form.List name="jobs" initialValue={profileData.jobs}>
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
                                    <Form.Item {...restField} name={[name, 'title']} label="Your Job Title" labelCol={{ span: 24 }} rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={20} >
                                <Col span={8}>
                                    <Form.Item {...restField} name={[name, 'start_date']} label="Start Date" labelCol={{ span: 24 }} rules={[{ required: true, type: "date" }]}>
                                        <DatePicker />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item {...restField} name={[name, 'end_date']} label="End Date" labelCol={{ span: 24 }} rules={[{ required: true, type: "date" }]}>
                                        <DatePicker />
                                    </Form.Item>
                                </Col>

                                <Col span={8}>
                                    <Form.Item {...restField} name={[name, 'salary']} label="Salary" labelCol={{ span: 24 }} rules={[{ required: true, type: "number" }]}>
                                        <InputNumber prefix="$" />
                                    </Form.Item>
                                </Col>


                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item {...restField} name={[name, 'feedback']} label="Please talk about your responsibilities and experiences in this job" labelCol={{ span: 24 }} rules={[{ required: false }]}>
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
    </>
}

function ReferencesForm({ countries, user, profileData }) {

    return <>


        <Divider >References</Divider>
        <Form.List name="references" initialValue={profileData.references}>
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
    </>
}

function CVForm({ user }) {


    return <>


        <Divider >CV</Divider>
        <Space direction="vertical">

            <Row gutter={20} >
                <Col span={24}>
                    <Form.Item
                        label="Upload your CV"
                        labelCol={{ span: 24 }}
                        name="cv"
                        valuePropName='fileList'
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
            {/* <Row gutter={20} >
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
            </Row> */}
        </Space>
    </>
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
        valuePropName='fileList'
        {...props}>
        <Button icon={
            <UploadOutlined />}> Upload
        </Button >
    </Upload >
}


function isObject(value) {
    return !!(value && typeof value === "object" && !Array.isArray(value));
};


function preprocessSavedProfile(obj) {
    for (const [key, value] of Object.entries(obj)) {
        // Convert date strings in profile object to Moment objects
        if (key.includes("date")) {
            obj[key] = moment(value);
        }
        // Convert file upload objects to the structure expected by Ant Design
        if (key.includes("upload")) {
            if (!value) continue;
            const antFile = uploadDataToAntFile(value);
            obj[key] = [antFile];
        }
        else if (isObject(value)) {
            preprocessSavedProfile(value);
        }
        else if (Array.isArray(value)) {
            value.forEach(v => preprocessSavedProfile(v));
        }
    }
}

function FinishedMessage({ onProfileClick }) {
    const router = useRouter();

    return (
        <Result
            status="success"
            title="You've completed your profile!"
            extra={[
                <Button type="primary" key="jobs" onClick={() => router.push('/jobs')}>
                    Browse Jobs
                </Button>,
                <Button key="profile" onClick={() => { onProfileClick(), router.push('/profile') }}>Continue working on your profile</Button>,
            ]}
        />
    )
}

export default function Profile({ countries }) {
    const { user } = useUser({
        redirectTo: '/login'
    });
    const [profileData, setProfileData] = useState({});
    const [currentTab, setCurrentTab] = useState(0);
    const [done, setDone] = useState(false);

    function onTabChange(value) {
        setCurrentTab(value);
    };

    function onSubmit(values) {
        if (currentTab < 4) {
            setCurrentTab(currentTab + 1);
        }
        else if (values.tabIndex == 4) {
            // We're done
            setDone(true);
        }
    }

    useEffect(() => {
        if (!user) return;
        async function fetchProfile() {
            const data = await (await fetch(`/api/profile?id=${user.id}`, {
                method: "GET",
                headers: { 'Content-Type': 'application/json' },
            })).json();
            preprocessSavedProfile(data);
            setProfileData(data);
        }
        fetchProfile();
    }, [user]);

    if (!user) {
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

    if (done) {
        return <FinishedMessage onProfileClick={() => setDone(false)} />
    }

    return (<>
        <Navbar dark={false} />
        <Banner title="Profile" id="banner" user={user} profileData={profileData} />

        <ContainerLayout subtitle="Profile">
            <Steps current={currentTab} onChange={onTabChange}>
                <Step title="Biography" icon={<InfoCircle />} description="&nbsp;" />
                <Step title="Education" icon={<Mortarboard />} description="&nbsp;" />
                <Step title="Work Experience" icon={<Briefcase />} description="&nbsp;" />
                <Step title="References" icon={<ReferenceIcon width={24} height={24} />} description="&nbsp;" />
                <Step title="CV" icon={<ResumeIcon width={24} height={24} />} description="&nbsp;" />
            </Steps>
            <Tabs defaultActiveKey={currentTab} activeKey={currentTab.toString()}>
                <TabPane tab={"Tab 1"} key={0}>
                    <TabbedForm name="basic" autoComplete="off" tabIndex={0} user={user} profileData={profileData} onSubmit={onSubmit}>
                        <BasicForm countries={countries} />
                    </TabbedForm>
                </TabPane>
                <TabPane tab={"Tab 2"} key={1}>
                    <TabbedForm name="education" autoComplete="off" tabIndex={1} user={user} profileData={profileData} onSubmit={onSubmit}>
                        <EducationForm countries={countries} />
                    </TabbedForm>
                </TabPane>
                <TabPane tab={"Tab 3"} key={2}>
                    <TabbedForm name="work" autoComplete="off" tabIndex={2} user={user} profileData={profileData} onSubmit={onSubmit}>
                        <WorkForm countries={countries} />
                    </TabbedForm>
                </TabPane>
                <TabPane tab={"Tab 4"} key={3}>
                    <TabbedForm name="references" autoComplete="off" tabIndex={3} user={user} profileData={profileData} onSubmit={onSubmit}>
                        <ReferencesForm countries={countries} />
                    </TabbedForm>
                </TabPane>
                <TabPane tab={"Tab 5"} key={4}>
                    <TabbedForm name="cv" autoComplete="off" tabIndex={4} user={user} profileData={profileData} onSubmit={onSubmit}>
                        <CVForm />
                    </TabbedForm>
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

