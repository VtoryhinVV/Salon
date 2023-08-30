import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutUs } from './pages/AboutUs';
import ContactuUs from './pages/ContactUs';
import Products from './pages/Products';

import { Layout } from './components/Layout/Layout';
import { ServicesChoose } from './pages/ServicesChoose';

function App() {
  return (
    <BrowserRouter basename={'/Salon'}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/services" element={<p>services</p>} />

          <Route
            path="/services/:servicesChoose"
            element={<ServicesChoose />}
          />
          <Route path="/pricing" element={<p>pricing</p>} />
          <Route path="/vouchers" element={<p>vouchers</p>} />
          <Route path="/contact_us" element={<p>contact_us</p>} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
