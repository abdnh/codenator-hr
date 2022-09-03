import React, { useState } from 'react';
import Breadcrumb1 from './breadcrumb';
import Layout from '../../layouts/admin/layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
import { InboxOutlined } from '@ant-design/icons';
import { Card, Select, Input, Collapse, Space, DatePicker, message, Upload, Checkbox } from 'antd';
import useUser from "../../lib/useUser";
import {postJSON} from "../../lib/request";

const { Dragger } = Upload;
const { TextArea } = Input;

const Quill = styled.div`
      .ql-formats{
        padding:0;
        margin:0;
        button{
          font-size:50px;
        }
      }
      .ql-editor{
        height:25vh;
      }
      .colap{
        aa{
            color:red;
        }
        
      }
`;
const Style = styled.div`
      .content-body{
         .btn{
            width:100%;
            margin-top:50px;
            button{
                color:#fff;
                background:#112a45;
                flex-direction: row;
                border:none;
                margin:0 5px;
                height:7vh;
                border-radius:5px;
            }
        }
      }
      
`;
const data = [
    {
        text: 'Içerik',
        link: '/admin/içerik/içerik ekle',
    },
];
//dosya yükleme
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

    onChange(info) {
        const { status } = info.file;

        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }

        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },

    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
//cheked değiştirme
const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};


export default function Icerik_ekle() {
    const counterRef = React.useRef();
    const { quill, quillRef } = useQuill();
    const [startDate, setStartDate] = useState(new Date());
    const [errorMessage, setErrorMessage] = useState('');
    const [baslik, setBaslik] = useState('');
    const [icerik, setIcerik] = useState('');
    const [fotgraf, setFotograf] = useState('');
    const [protokol, setProtokol] = useState('');
    const [yayin, setYayin] = useState('');
    const [kategori, setKategory] = useState('');

    const { mutateUser } = useUser({
        redirectTo: '/admin/icerik_ekle',
        redirectIfFound: true,
    });

    const handleSubmit = (e) => {
        //otomatik gücelemeyi engeller
            e.preventDefault();
            const body={
                baslik:baslik,
            }
                postJSON('/api/icerik-admin', body, body.id ? "PATCH" : "POST").then(res => res.json()).then((data) => {
                    if (data.ok) {
                        message.success("uccessfully");
                    } else {
                        message.error("Failed to submit your application" + (data.message ? `:${data.message}` : ''));
                    }
                }
                ).catch((e) => message.error(`Failed to submit: ${e}`));
    }
    return (
        <Layout>
            <Breadcrumb1 data={data} />
            <Style>
                <div className='content-body'>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={8}>
                                <p style={{ height: "30px", color: "#fff", background: "#112a45", paddingLeft: "20px", margin: 0, borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}>Içerik Başlığı Ekle</p>
                                <TextArea rows={2} onChange={(e) => { setBaslik(e.target.value) }} style={{ marginBottom: "40px" }} />

                                <div style={{ width: 678, height: 300 }}>
                                    <Quill>
                                        <div className='ql-tool'>
                                            <p style={{ height: "30px", color: "#fff", background: "#112a45", paddingLeft: "20px", margin: 0, borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}>
                                                içerik Bilgileri Yazınız
                                            </p>
                                            <div ref={quillRef} rows={9} />
                                        </div>
                                    </Quill>
                                </div>
                                <div className='imd-file'>
                                    <p style={{ height: "30px", color: "#fff", background: "#112a45", paddingLeft: "20px", margin: 0, borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}>Fotograf Ekle</p>
                                    <Dragger {...props} style={{ marginBottom: "40px" }}>
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">Dosya yüklemek için Tıklayınız</p>
                                    </Dragger >
                                </div>
                                <div className='protokol'>
                                    <p style={{ height: "30px", color: "#fff", background: "#112a45", paddingLeft: "20px", margin: 0, borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}>Link</p>
                                    <Row style={{ border: '1px solid #ccc', width: '100%', marginLeft: '0' }} >
                                        <Col md={4} style={{ height: '20vh' }}>
                                            <Select
                                                style={{ width: '80%', margin: '20px' }}
                                                placeholder="Protokol Seçiniz" >
                                                <p>http://</p>
                                                <p>https://</p>
                                                <p>Diğeri</p>
                                            </Select>
                                        </Col>
                                        <Col md={8}>
                                            <TextArea rows={4} placeholder='URL giriniz' style={{ width: '95%', margin: '20px' }} />
                                        </Col>
                                    </Row>

                                </div>
                            </Col>
                            <Col md={{ span: 3, offset: 1 }}>
                                <div className="yayin" style={{ marginTop: "40px" }}>
                                    <Card
                                        title="Yayın Bilgileri" style={{ width: '100%', background: '#F9F9F9' }}>
                                        <Select
                                            mode="tags" style={{ width: '100%', marginBottom: "20px" }}
                                            placeholder="yayın" >
                                            <p>yayın</p>
                                            <p>yaynlı değil</p>

                                        </Select>

                                        <Space direction="vertical">
                                            <span>Güncelleme Tarihi Giriniz</span>
                                            <DatePicker />
                                        </Space>
                                    </Card>
                                </div>
                                <div className="kategori" style={{ marginTop: "40px" }}>
                                    <Card

                                        title="kategori seç" style={{ width: '100%', height: 200, background: '#F9F9F9' }}>
                                        <div>
                                            <div className='meslek'>
                                                <Checkbox onChange={onChange}>Meslek</Checkbox>
                                            </div>
                                            <div className='staj'>
                                                <Checkbox onChange={onChange}>Staj</Checkbox>
                                            </div>
                                            <div className='blog'>
                                                <Checkbox onChange={onChange}>Blog</Checkbox>
                                            </div>
                                            <div className='hakkinda'>
                                                <Checkbox onChange={onChange}>Hakkında</Checkbox>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                                <div className="btn btn-sm">
                                    <button type="button" >Vazgeç</button>
                                    <button type="submit" >Bilgileri Sakla</button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                    <hr />
                    <br />
                    <br />
                    <br />
                </div>
            </Style>
        </Layout>
    )
}


