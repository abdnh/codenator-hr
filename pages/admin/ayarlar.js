import React from 'react';
import Layout from '../../layouts/admin/layout';
import Ayarlar from '../../components/admin/ayarlar';
import Breadcrumb1 from './breadcrumb';
import CardCustum from '../../components/ant/Card';

const data = [
  {
    text: 'Ayarlar',
    link: '/admin/ayarlar',
  },
];
export default function Admin_Ayarlar() {

  return (
    <Layout>
      <Breadcrumb1 data={data} />
      <div className='content-body'>
        <CardCustum>
          <Ayarlar />
        </CardCustum>
      </div>
    </Layout>
  )
}
