import NavBar from "./components/Navbar/NavBar";
import HomePage from "./home/HomePage";
import './style/App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart";
import AboutPage from "./pages/AboutPage";
import Account from "./components/Account/Account";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product-details" element={<Cart />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;