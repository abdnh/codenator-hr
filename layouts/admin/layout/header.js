import React from 'react';
import Link from 'next/link';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Headerl() {
  return (
    <div className="admin_Header">
      <Row>
        <Col xs={10} >
          <div className="left">
            <h4>Merhaba <b>Kullanıcı</b></h4>
            <p>Hoş Geldin</p>
          </div>
        </Col>
        <Col xs={2} >
          <div className="right">
            <Link href="/akis/5"><SettingsIcon style={{width:"27px",height:"27px"}}/></Link>
            <Link href="/akis/6"><LogoutIcon style={{width:"27px",height:"27px"}}/></Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}
