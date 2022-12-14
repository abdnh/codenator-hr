import React from 'react';
import Layout from '../../layouts/admin/layout';
import Kategori from '../../components/admin/kategori';
import Breadcrumb1 from './breadcrumb';
import CardCustum from '../../components/ant/Card';
const data = [
  {
    text: 'Kategoriler',
    link: '/admin/kategoriler',
  },
];

export default function Admin_Kategoriler() {
  return (
    <Layout>
      <Breadcrumb1 data={data} />
      <div className='content-body'>
        <CardCustum>
          <Kategori />
        </CardCustum>

      </div>
    </Layout>
  )
}
