import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { ServicesChoose } from './pages/ServicesChoose';
import { lazy } from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ContactUsPage from './pages/ContactUsPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import { Voucher } from './pages/Voucher';
import { PricingPage } from './pages/PricingPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUs = lazy(() => import('./pages/AboutUs'));

function App() {
  return (
    <BrowserRouter basename={'/Salon'}>
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
