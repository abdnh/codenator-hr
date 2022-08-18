import React from 'react';
import Layout from '../../layouts/admin/layout';
import Kullaniciler from '../../components/admin/kullaniciler';
import Breadcrumb1 from './breadcrumb';
import CardCustum from '../../components/ant/Card';

const data = [
  {
    text: 'Kullaniciler',
    link: '/admin/kullaniciler',
  }
]
export default function Admin_Kullaniciler() {
  return (
    <Layout>
      <Breadcrumb1 data={data} />
      <div className='content-body'>
        <CardCustum>
          <Kullaniciler />
        </CardCustum>

      </div>
    </Layout>
  )
}
