import React from 'react';
import Layout from '../../layouts/admin/layout/layout';
import Link from 'next/Link';
import { FaHome } from 'react-icons/fa';
export default function loginkayitlari() {
  return (
    <Layout>
      <div className="left">
        <p>Login Kayıtları</p>
      </div>
      <div className="right">
        <FaHome />
        <Link href="/Kontrol Panel">Kontrol Panel </Link>
        <span> / </span>
        <p>Login Kayıtları</p>
      </div>
    </Layout>
  )
}
