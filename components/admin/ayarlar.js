import React from 'react';
import Card from 'react-bootstrap/Card';
import Com_breadcrumb from './com_breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { Switch } from 'antd';
import styled from 'styled-components';
import { Input } from 'antd';
const { TextArea } = Input;

const Ayarla = styled.div`

.bilgiler{
  padding:20px;
  .email{
    margin-bottom:20px;
    display:flex;
    flex-direction: row;
    input{
      border-radius: 0;
      width:76vh;
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
    width:76vh;
    border-radius: 0;
  }
  
}
.konum{
  .konum-bilgisi{
    margin-bottom:20px;
    display:flex;
    flex-direction: row;
  }
  .meta{
    margin-bottom:20px;
    display:flex;
    flex-direction: row;
  }
  TextArea{
    width:76vh;
    border-radius: 0;
  }
}
.btn{
  padding:30px 47vh ;
  button{
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
`;

export default function Ayarlar() {
  return (
    <Card style={{ background: "#fff" }}>
      <Card.Header style={{ background: "#fff" }}>
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
        <div className='bilgiler'>
            <div className='email' style={{paddingLeft:"10px"}}>
              E-mail
              <span style={{padding:"0 20px"}}>
                :
              </span>
              <input type="email" className="form-control" placeholder='Eposta' id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className='tel' style={{paddingLeft:"4px"}}>
              Telefon
              <span style={{padding:"0 23px 0 20px"}}>
                :
              </span>
              <span className='tele'>+90</span>
              <input placeholder="5xx-xxx-xx-xx" id="siteAyarlari_phoneNumber" class="ant-input" type="text" value=""></input>
              
            </div>
            <div className='adres' style={{paddingLeft:"7px"}}>
              Adress
              <span style={{padding:"0 20px"}}>
                :
              </span>
              <TextArea rows={1} placeholder="Adres Giriniz" />
            </div>
          </div>
          <hr />
          <div className='konum'>
          <div className='konum-bilgisi' style={{paddingLeft:"22px"}}>
              <span>Konum</span>
              <span style={{padding:"0 20px"}}>
                :
              </span>
              <TextArea rows={2} placeholder="Konum bilgisi  Giriniz" />
            </div>
            <div className='meta' style={{paddingLeft:"2px"}}>
              <p style={{width:"70px"}}>Meta Tag</p>
              <span style={{padding:"0 20px"}}>
                :
              </span>
              <TextArea rows={2}/>
            </div>
          </div>
          <div className="btn btn-sm">
                                <button type="button" >Vazgeç</button>
                                <button type="button" >Bilgileri Sakla</button>
                                </div>
        </Ayarla>
      </Card.Body>
    </Card>
  )
}
