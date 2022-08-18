import React from 'react';
import Icerik from '../../components/admin/icerik';
import Layout from '../../layouts/admin/layout';
import Breadcrumb1 from './breadcrumb';
import CardCustum from '../../components/ant/Card';
const data = [
  {
    text: 'Icerikler',
    link: '/admin/icerikler',
  },
];
export default function Admin_Icerikler() {
  return (
    <Layout>
      <Breadcrumb1 data={data} />
      <div className='content-body'>
        <CardCustum>
          <Icerik />
        </CardCustum>

      </div>
    </Layout>
  )
}
