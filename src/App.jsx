import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { ServicesChoose } from './pages/ServicesChoose';
import { lazy } from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const Voucher = lazy(() => import('./pages/Voucher'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/services/:servicesChoose"
            element={<ServicesChoose />}
          />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/vouchers" element={<Voucher />} />
          <Route path="/contact_us" element={<ContactUsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
