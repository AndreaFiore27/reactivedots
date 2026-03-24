import { Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import GlassBlobs from './components/GlassBlobs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import SectionDivider from './components/SectionDivider';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import About from './components/About';
import CtaBanner from './components/CtaBanner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Portfolio />
      <SectionDivider />
      <Process />
      <CtaBanner />
      <About />
      <SectionDivider />
      <ContactForm />
    </>
  );
}

export default function App() {
  return (
    <>
      <GlassBlobs />
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/progetti" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </>
  );
}
