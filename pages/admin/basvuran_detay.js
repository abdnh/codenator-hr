import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Breadcrumb1 from './breadcrumb';
import Layout from '../../layouts/admin/layout';
import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneFlip, faEnvelope, faCertificate,} from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Body = styled.div`

.body{
      background:#fff;
      height:750px;
      padding: 40px 80px;
      .kullanici-bilgileri{
        background: #F9F9F9;
        margin:0 40px;
        border-radius: 10px;
        .baslik{
          background:#495C83;
          padding-left:50px;
          padding-top:20px;
          border-top-right-radius: 10px;
          border-top-left-radius: 10px;
          .name{
            color:white;
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;
          }
          .iletisim{
            color:white;
            display:flex;
            justify-content: space-between;
            span{
              margin-right:10px;
            }
            .right{
                margin:-37px 20px 0 0 ;
            }
          }
        }
        .detayli-bilgi{
          .genel{
            p{
              color:#000;
            }
            span{
              color:#5f666d;
            }
          }
          .kisisel{
              p{
                color:#000;
              }
              span{
                color:#5f666d;
              }
          }
        }
      }
}
      
`;
const data = [
  {
    text: 'Başvurulan',
    link: '/admin/Başvurulan/Detay',
  },
];


export default function Basvuran_detay() {
  const router = useRouter();
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/profiles").then(res => res.json())
      .then(datas => {
        setData(datas);
      });
  }, [router]);

  return (
    <Layout>
      <Breadcrumb1 data={data} />
      
      <Body>
        <div className='body'>
          {
            datas?.map((item) => (
              <>
                <div className='kullanici-bilgileri' style={{ width: "90%", height: "700px" }}>
                  <div className='baslik' style={{ height: 90 }} >
                    <span className='name'>{item.first_name}{` `}{item.middle_name}{` `}{item.last_name}</span>
                    <div className='iletisim'>
                      <div className='left'>
                        <span><FontAwesomeIcon icon={faEnvelope} /></span>
                        <span>{item.email}</span>
                        <span><FontAwesomeIcon icon={faPhoneFlip} /></span>
                        <span>{item.phone}</span>
                        <span><FontAwesomeIcon icon={faLocationDot} /></span>
                        <span>{item.country}{` / `}{item.city}</span>
                      </div>

                     <div className='right'>
                        <Image className='img'
                    src="/img/images1.jpg"
                    alt="Picture of the author"
                    width={70}
                    height={70}
                    style={{ borderRadius: "50px" }}
                  />
                     </div>
                    </div>
                   
                  </div>
                  <div className='detayli-bilgi'>
                  <Container>
                    <Row style={{ width: "90%", height: "550px" , marginTop:"20px"}}>
                      <Col md={8} className='genel' style={{marginLeft:"10px",borderRight:"1px solid #F1F1F1"}}>
                        <h3 style={{ marginBottom:"20px"}}>Eğitim Bilgileri:</h3>
                        <Row>
                          <Col md={7}>
                              <p><b>{item.branch}</b></p>
                              <p>{item.university}{`/`}{item.faculty}</p>
                          </Col>
                          <Col md={4}>
                          <div className='tarih'>
                                <p>{item.enrollment_date}{` - `}{item.graduation_date}</p>
                                <p>{item.score}</p>
                        </div>
                          </Col>
                          <hr  style={{ width: "80%"}}/>
                        </Row>
                        <div className='dil-sertfika'>
                          <Row>
                            <Col md={6}>
                            <h3 style={{ marginBottom:"20px"}}>Dil Bilgileri:</h3>
                            {
                              item.languages?.map((item)=>(
                                <>
                                <span style={{marginRight:"80px"}}>{item.language}</span>
                                <span><FontAwesomeIcon icon={faCertificate} /></span>
                                </>
                              ))
                            }
                            </Col>
                            <Col md={6}>
                            <h3 style={{ marginBottom:"20px"}}>Sertfika Bilgileri:</h3>
                            {
                              item.languages?.map((item)=>(
                                <>
                                <span style={{marginRight:"80px"}}>{item.language}</span>
                                <span><FontAwesomeIcon icon={faCertificate} /></span>
                                </>
                              ))
                            }
                            </Col>
                          </Row>
                            
                        </div>
                        
                      </Col>
                      <Col md={3}  className='kisisel'>
                        <h3  style={{ width: "170%", marginBottom:"20px"}}>Kişisel Bilgiler:</h3>
                        <span>Medeni Halı: <p>{item.gender}</p></span>
                        <span>Doğum Tarihi: <p>{item.birth_date}</p></span>
                        <span>Cinsiyet: <p>{
                              item.citizenships?.map((item)=>(
                                <>
                                  <span> {item.country} {`/`}</span>
                                  <span>{item.citizenship_reason}</span>
                                </>
                              ))
                            }</p></span>
                        <hr/>
                        <h3 style={{marginBottom:"20px"}}>Adres:</h3>
                        <span><p>Ülke Kodu:{item.zip_code}</p></span>
                        <span>Adress:<p>{item.city}{`/`}{item.area}</p></span>
                        <p>{item.address}</p>
                      </Col>
                    </Row>
                    </Container>
                  </div>
                </div>
                
              </>
            ))}


        </div>
      </Body>

    </Layout>
  )
}
