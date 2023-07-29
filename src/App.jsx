import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import ContactuUs from "./pages/ContactUs";
import Products from "./pages/Products";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about_us" element={<p>About</p>} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactuUs />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
