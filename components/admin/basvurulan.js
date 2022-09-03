import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';
import Com_breadcrumb from './com_breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserGear } from '@fortawesome/free-solid-svg-icons';

const silProduct = (e, id) => {
  fetch("http://localhost:3001/profiles/" + id , {
    method : "DELETE"
  })
}


const columns = [
  {
    key: "first_name",
    title: "Name",
    dataIndex:"first_name"
  },
  {
    key: "email",
    title: "Email",
    dataIndex: "email",
  },
  {
    key: "adress",
    title: "Adress",
    dataIndex: "address",
  },
  {
    key: "phone",
    title: "Phone Number",
    dataIndex: "phone",
  },
  {
    title: 'işemler',
    dataIndex: 'id',
    render: (data, full, index) => {
      return (
        <div className='dt-action' style={{ display: "flex", justifyContent: "space-around" }}>
          <a onClick={(e) => { silProduct(e, data) }}>
            <FontAwesomeIcon icon={faTrash} style={{color:"rgb(97, 96, 96)"}}/>
          </a>
         
        </div>
      );
    },
  },
];

export default function BasVurulan() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
     fetch("http://localhost:3001/profiles").then(res => res.json())
      .then(datas => {
        setDatas(datas);
      });
  }, []);
  return (
    <Card >
      
            <Card.Header>
              <div className='head'>

                <div className='nav'>
                  <div className='left'>
                    <FontAwesomeIcon style={{ paddingRight: "10px" }} icon={faUserGear} />
                    BasVurulan
                  </div>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <Com_breadcrumb columns={columns} data={  datas}/>
            </Card.Body>
          
    </Card>
  )
}
  
