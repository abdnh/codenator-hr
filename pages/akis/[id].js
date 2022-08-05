import { useRouter } from 'next/router';
import React  from 'react';
import Layout from '../../layouts/admin/layout/layout';

export default function Categorydet() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
    <Layout>{id}</Layout>
    </>
  )
}
