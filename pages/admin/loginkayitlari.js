import React from 'react';
import Log_kayitler from '../../components/admin/log_kayitler';
import Layout from '../../layouts/admin/layout';
import Breadcrumb1 from './breadcrumb';
import CardCustum from '../../components/ant/Card';

const data = [
  {
    text: 'Login kayitlari',
    link: '/admin/login kayitlari',
  }
]
export default function Admin_Loginkayitlari() {
  return (
    <Layout>
      <Breadcrumb1 data={data} />
      <div className='content-body'>
        <CardCustum>
          <Log_kayitler />
        </CardCustum>
      </div>
    </Layout>
  )
}
