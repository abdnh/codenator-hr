import { Breadcrumb } from 'antd';
import React from 'react';
import Link from 'next/Link';
import { FaHome } from 'react-icons/fa';

export default function Breadcrumb1(props) {
  return (
    <div className='content-header'>
      <div className="left">
        <p>{props.data[0].text}</p>
      </div>
      <div className="right">
        <Breadcrumb>
          <Breadcrumb.Item>
            <FaHome className='icon'/>
            <Link href="/admin">Kontrol Panel </Link>
          </Breadcrumb.Item>
          {props.data.map((item) => (
            <Breadcrumb.Item>
              <Link href={item.link}>{item.text}</Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
    </div>

  )
}
