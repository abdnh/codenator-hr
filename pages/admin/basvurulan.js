import React from 'react';
import Layout from '../../layouts/admin/layout';
import BasVurulan from '../../components/admin/basvurulan';
import Breadcrumb1 from './breadcrumb';
import CardCustum from '../../components/ant/Card';

const data = [
  {
    text: 'BasVurulan',
    link: '/admin/BasVurulan',
  }
]
export default function Bas_vurulan() {
  return (
    <Layout>
      <Breadcrumb1 data={data} />
      <div className='content-body'>
        <CardCustum>
          <BasVurulan />
        </CardCustum>

      </div>
    </Layout>
  )
}
