import React from 'react';
import Card from 'react-bootstrap/Card';
import Com_breadcrumb from './com_breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faMap } from '@fortawesome/free-solid-svg-icons';


export default function Kategori() {
  return (
    <Card >
      <Card.Header>
        <div className='head'>
          <div className='nav'>
            <div className='left'>
              <FontAwesomeIcon style={{ paddingRight: "10px" }} icon={faMap} />
              kategori
            </div>
            <div className='right'>
              <button style={{ color: "#29577e", background: "white", width: "200px", height: "30px" }}>Yeni Manşet Ekle</button>
            </div>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <div className='kategori-home'>
          <span><FontAwesomeIcon icon={faFolderOpen}/>Ana Sayfa</span>
        </div>
        <div className='profil'>
        <span><FontAwesomeIcon icon={faFolderOpen}/>Profil</span>
        </div>
        <div className='meslek'>
        <span><FontAwesomeIcon icon={faFolderOpen}/>Meslek</span>
        </div>
        <div className='staj'>
          <span><FontAwesomeIcon icon={faFolderOpen}/>Staj</span>
        </div>
        <div className='blog'>
          <span><FontAwesomeIcon icon={faFolderOpen}/>Blog</span>
        </div>
        <div className='hakkinda'>
          <span><FontAwesomeIcon icon={faFolderOpen}/>Hakkında</span>
        </div>
      </Card.Body>
    </Card>
  )
}
