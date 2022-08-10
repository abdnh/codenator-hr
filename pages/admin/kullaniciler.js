import React from 'react';
import Link from 'next/Link';
import { FaHome } from 'react-icons/fa';
import Layout from '../../layouts/admin/layout/layout';
export default function Kullaniciler() {
  return (
    <Layout>
      <div className="left">
        <p>Kullaniciler</p>
      </div>
      <div className="right">
        <FaHome />
        <Link href="/Kontrol Panel">Kontrol Panel </Link>
        <span>/</span>
        <p> Kullaniciler</p>
      </div>
    </Layout>
  )
}
