import React,{useState,useEffect} from 'react';
import {Image } from 'antd';
import Card from 'react-bootstrap/Card';
import Com_breadcrumb from './com_breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPenToSquare, faTrash ,faMap} from '@fortawesome/free-solid-svg-icons';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
const columns = [
  {
    key:'Giriş Tarihi',
    title: 'Giriş Tarihi',
    dataIndex: 'tarih',
  },
  {
    key:'Modul',
    title: 'Modül',
    dataIndex: 'Modul',
    
  },
  {
    key:'Eylem',
    title: 'Eylem',
    dataIndex: 'Eylem',
    
  },
  {
    key:'Adress',
    title: 'Adress',
    dataIndex: 'Adress',
    
  },
  {
    key: 'Kullanıcı Adı',
    title: 'Kullanıcı Adı',
    dataIndex: 'Kullanici-Adi',
    
  },
  {
    key:'IP',
    title: 'IP',
    dataIndex: 'ip',
    
  },
];
export default function Log_kayitler() {
  const [data, setData] = useState([]);

  useEffect(() => {
     fetch("http://localhost:3001/login-kayit").then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);
  return(
    <Card >
    <Card.Header>
    <div className='head'>
        <div className='nav'>
          <div className='left'>
          <AiOutlineFundProjectionScreen style={{paddingRight:"10px", fontSize:"30px"}} />
              login kayıtları
          </div>
        </div>
      </div>
    </Card.Header>
    <Card.Body>
    <Com_breadcrumb columns={columns} data={data}/>
    </Card.Body>
  </Card>
  )
}
