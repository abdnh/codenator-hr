import React,{useState,useEffect} from 'react';
import {Image, Switch } from 'antd';
import Card from 'react-bootstrap/Card';
import Com_breadcrumb from './com_breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash ,faUserGroup} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';



export default function Kullaniciler() {
  const [data, setData] = useState([]);
  const router = useRouter();

  const silProduct = (e, id) => {
    fetch("http://localhost:3001/admins/" + id , {
      method : "DELETE"
    })
  }

  const columns = [
    {
      kay:'Ad Soyad',
      title: 'Ad Soyad',
      dataIndex: 'name',
    },
    {
      key:'Fotograf',
      title: 'Fotograf',
      dataIndex: 'Fotograf',
      render: (text) => <Image src={text} width={50} height={50} alt=""/>,
    },
    {
      key:'E-posta',
      title: 'E-posta',
      dataIndex: 'E-posta',
      
    },
    {
      key:'Yayın Durumu',
      title: 'Yayın Durumu',
      dataIndex: 'math',
      render: () => {
        return (
        <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
        );
      },
    },
    {
      key:'Tarih',
      title: 'Tarih',
      dataIndex: 'tarih',
    },
    {
      title: 'işemler',
      dataIndex: 'id',
      render: (data, full, index) => {
        return (
          <div className='dt-action' style={{ display: "flex", justifyContent: "space-around" }}>
            <a onClick={(e) => { editProducts(e, data) }}>
              <FontAwesomeIcon icon={faPenToSquare}  style={{color:"rgb(97, 96, 96)"}}
              />
            </a>
            <a onClick={(e) => { silProduct(e, data) }}>
              <FontAwesomeIcon icon={faTrash} style={{color:"rgb(97, 96, 96)"}}/>
            </a>
           
          </div>
        );
      },
    },
  ];

  useEffect(() => {
     fetch("http://localhost:3001/admins").then(res => res.json())
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
          <FontAwesomeIcon style={{paddingRight:"10px"}} icon={faUserGroup}/>
              kullanıcılar
          </div>
          <div className='right'>
          <button style={{color:"#112a45",background:"white",width: "200px",height: "30px"}}>
            <Link href='/admin/kullanici_ekle'>
                Yeni Kullanıcı Ekle
          </Link>
          </button>
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
