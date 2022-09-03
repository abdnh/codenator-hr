import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Input,Form } from 'antd';

const { TextArea } = Input;
const Ayarla = styled.div`

.ayarlar{
    border-radius: 10px;
    border-top: none;
    background:#fff;
    .bilgiler{
      padding:20px;
      .email{
        margin-bottom:20px;
        display:flex;
        flex-direction: row;
        input{
          border-radius: 0;
          width:500px;
        }
      }
      .tel{
        margin-bottom:20px;
        display:flex;
        flex-direction: row;
        .tele{
            border: 1px solid rgb(0, 0, 0,0.2);
            background: aliceblue;
            align-items: center;
            display: flex;
        }
        span{
          width:40px;
          height:30px;
        }
      }
      input{
        width:70vh;
        height:30px;
      }
      TextArea{
        width:500px;
        border-radius: 0;
      }
      
    }
    .btn{
      padding:30px 47vh ;
      button{
        cursor:pointer;
          color:#fff;
          background:#112a45;
          flex-direction: row;
          border:none;
          margin: 0 2vh;
          width:20vh;
          height:7vh;
          border-radius:5px;
      }
    
  }
  .dark{
    border:1px solid #000;
    border-top: none;
    .bilgiler{
      padding:20px;
      .email{
        margin-bottom:20px;
        display:flex;
        flex-direction: row;
        input{
          border-radius: 0;
          width:500px;
        }
      }
      .tel{
        margin-bottom:20px;
        display:flex;
        flex-direction: row;
        .tele{
            border: 1px solid rgb(0, 0, 0,0.2);
            background: aliceblue;
            align-items: center;
            display: flex;
        }
        span{
          width:40px;
          height:30px;
        }
      }
      input{
        width:70vh;
        height:30px;
      }
      TextArea{
        width:500px;
        border-radius: 0;
      }
    }
    
    .btn{
      padding:30px 47vh ;
      background:#000;
      button{
        cursor:pointer;
          color:#fff;
          background:#112a45;
          flex-direction: row;
          border:none;
          margin: 0 2vh;
          width:20vh;
          height:7vh;
          border-radius:5px;
      }
    }
  }
}
`;

export default function Ayarlar() {
  const [form] = Form.useForm();

  const handleSubmit = (e) => {
      e.id = 1;
      fetch(`http://localhost:3001/ayarlar/1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(e),
      }).then((res) => {
          if (res.status != 200 && res.status != 201) {
            console.log('Google-  not so OK', res);
            throw new Error(`beklenmeyen bir hata oluştu (${res.status})`);
          }
        }).catch(function (err) {
          console.log(err);
        });
  }

  return (
    <Ayarla>
      <div className='ayarlar'>
          <Card >
          <Card.Header >
            <div className='head'>
              <div className='nav'>
                <div className='left'>
                  <FontAwesomeIcon style={{ paddingRight: "10px" }} icon={faScrewdriverWrench} />
                        Ayarlar
                </div>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Ayarla>
              <Form layout="vertical" form={form} onFinish={handleSubmit} hideRequiredMark>
                <div className='bilgiler'>
                  <Form.Item name="email">
                    <div className='email' style={{ paddingLeft: "10px" }}>
                     <span> E-mail</span>
                      <span style={{ padding: "0 20px" }}>
                        :
                      </span>
                      <input placeholder=" Email Giriniz" type="email" style={{ border: "1px solid #d9d9d9" }}/>
                    </div>
                  </Form.Item>
                  <Form.Item name="telefon">
                    <div className='tel' style={{ paddingLeft: "4px" }}>
                     <span style={{width:"50px"}}>Telefon</span>
                      <span style={{ padding: "0 0 0 15px" }}>
                        :
                      </span>
                        <input placeholder=" xxx-xxx-xx-xx" type="text" style={{ width: "498px", border: "1px solid #d9d9d9" , height: "30px" }}></input>
                    </div>
                  </Form.Item>
                  <Form.Item name="adres">
                    <div className='adres' style={{ paddingLeft: "7px" }}>
                      <span>Adress</span>
                      <span style={{ padding: "0 20px" }}>
                        :
                      </span>
                      <TextArea rows={1} placeholder="Adres Giriniz" />
                    </div>
                  </Form.Item>
                </div>
              </Form>
              <hr style={{width:"90%"}}  className="hr"/>
              <div className="btn btn-sm">
                <button type="button" onClick={() => { form.resetFields(); }}>Vazgeç</button>
                <button type="button" onClick={() => { form.submit(); }}>Bilgileri Sakla</button>
              </div>
            </Ayarla>
          </Card.Body>
        </Card>
      </div>
    </Ayarla>
  )
}
