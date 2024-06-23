import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { ServicesChoose } from './pages/ServicesChoose';
import { lazy } from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';
import { DermalFiller } from './pages/Services/DermalFiller';
import { LipFiller } from './pages/Services/LipFiller';
import { InjectablesForMen } from './pages/Services/InjectablesForMen';
import { Medical } from './pages/Services/Medical';
import { AntiWrinkle } from './pages/Services/AntiWrinkle';
import { SkinRejuvenation } from './pages/Services/SkinRejuvenation';
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
          {/* <Route
            path="/services/:servicesChoose"
            element={<ServicesChoose />}
          /> */}
          <Route path="/services/dermal_filler" element={<DermalFiller />} />
          <Route path="/services/lip_filler" element={<LipFiller />} />
          <Route
            path="/services/injectables_for_men"
            element={<InjectablesForMen />}
          />
          <Route path="/services/medical" element={<Medical />} />
          <Route path="/services/anti_wrinkle" element={<AntiWrinkle />} />
          <Route
            path="/services/skin_rejuvenation_treatments"
            element={<SkinRejuvenation />}
          />
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
