import React,{useState,useEffect} from 'react';
import {Image, Switch } from 'antd';
import Card from 'react-bootstrap/Card';
import Com_breadcrumb from './com_breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPenToSquare, faTrash ,faUserGroup} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';



export default function Kullaniciler() {
  const [data, setData] = useState([]);
  const router = useRouter();
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
      render: (text) => <Image src={text} width={50} height={50}/>,
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
      key:'işemler',
      title: 'işemler',
      dataIndex: 'işemler',
      render: (text, record, index) => {
        return (
          <div className='dt-action' style={{"justify-content": "space-between"}}>
           <Link href='/admin/kullanici_ekle'>
              <FontAwesomeIcon icon={faPenToSquare} 
              onClick={() => router.push(`/admin/kullanici_ekle?id=${data[index].id}`)}
              />
           </Link>
            <FontAwesomeIcon icon={faTrash} />
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
