import { MOTTO } from "../lib/common";
import MainLayout from '../layouts/MainLayout';
import Navbar from "../components/Navbar";
import { default as HomeComponent } from "../components/Home";

export default function Home() {
  return (
    <MainLayout subtitle={MOTTO}>
      <Navbar />
      <HomeComponent />
    </MainLayout>
  )
}
