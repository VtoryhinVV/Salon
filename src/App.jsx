import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
// import { ServicesChoose } from './pages/ServicesChoose';
import { lazy, Suspense } from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';

const DermalFiller = lazy(() => {
  console.log('Loading DermalFiller');
  return import('./pages/Services/DermalFiller');
});
const LipFiller = lazy(() => import('./pages/Services/LipFiller'));
const InjectablesForMen = lazy(() =>
  import('./pages/Services/InjectablesForMen')
);
const Medical = lazy(() => import('./pages/Services/Medical'));
const AntiWrinkle = lazy(() => import('./pages/Services/AntiWrinkle'));
const SkinRejuvenation = lazy(() =>
  import('./pages/Services/SkinRejuvenation')
);

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/services" element={<ServicesPage />} />
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
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/vouchers" element={<Voucher />} />
            <Route path="/contact_us" element={<ContactUsPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
