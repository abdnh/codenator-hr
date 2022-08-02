import { MOTTO } from "../lib/common";
import MainLayout from '../layouts/MainLayout';

import { default as HomeComponent } from "../components/Home";

export default function Home() {
  return (
    <MainLayout subtitle={MOTTO}>
      <HomeComponent />
    </MainLayout>
  )
}
