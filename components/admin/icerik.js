import React,{useState,useEffect} from 'react';
import { Image, Switch } from 'antd';
import Card from 'react-bootstrap/Card';
import Com_breadcrumb from './com_breadcrumb';
import { GrCentos } from "react-icons/gr";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faFiles,faPaste} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/Link';
import { useRouter } from 'next/router';
import {postJSON} from "../../lib/request";

export default function Icerik() {
  const [data, setData] = useState([]);
  const [forcedUpdate, setForcedUpdate] = useState(false);

  const router = useRouter();

  const silProduct = (e, id) => {
    fetch("http://localhost:3001/icerik/" + id , {
      method : "DELETE"
    })
  }

  const columns = [
    {
      key:'Başlık',
      title: 'Başlık',
      dataIndex: 'Başlık',
    },
    {
      key:'Fotoğraf',
      title: 'Fotoğraf',
      dataIndex: 'Fotoğraf',
      render: (text) => <Image src={text} width={50} height={50}/>,
    },
    {
      key:'Yayın Durumu',
      title: 'Yayın Durumu',
      dataIndex: 'math',
      render: () => {
        return (
        <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked 
         />
        );
      },
    },
    {
      key:'Katrgori',
      title: 'Katrgori',
      dataIndex: 'Katrgori',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      key: 'Yayın Tarihi',
      title: 'Yayın Tarihi',
      dataIndex: 'tarih',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: 'Galeri',
      dataIndex: 'Galeri',
      render: () => {
        return (
          <GrCentos style={{ fontSize:"22px"}}/>
        );
      },
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
     fetch("http://localhost:3001/icerik").then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, [forcedUpdate]);
  return(
    <Card >
    <Card.Header>
    <div className='head'>
        <div className='nav'>
          <div className='left'>
          <FontAwesomeIcon style={{paddingRight:"10px"}} icon={faPaste}/>
              içerik
          </div>
          <div className='right'>
              <button style={{color:"#112a45",background:"white",width: "200px",height: "30px"}}>
                <Link href='/admin/icerik_ekle'>
                Yeni Içerik Ekle
                </Link>
                </button>
          </div>
        </div>
      </div>
    </Card.Header>
    <Card.Body>
    <Com_breadcrumb columns={columns}  data={data}/>
    </Card.Body>
  </Card>
  )
}

