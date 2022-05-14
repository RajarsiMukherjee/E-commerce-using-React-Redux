import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import Category from './Components/Category/Category';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import CartPage from './Components/CartPage/CartPage';
import Footer from './Components/Footer/Footer';
import ProductType from './Components/ProductType/ProductType';
import Product from './Components/Product/Product';
import ProductDetails from './Components/ProdectDetails/ProductDetails';
import  Checkout  from './Components/Checkout/Checkout';
import Payment from './Components/Payment/Payment';
import Success from './Components/Success/Success';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
         <Route  path="/" element={ 
           <>
            <LandingPage />
             <ProductType/>
           </>
        }/>
       </Routes>
       <Routes>
         <Route path="/login" element={<Login />}/>
       </Routes>
       <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>

       

      <Routes>
        <Route path="/womens_Fashion" element={<LandingPage />} />
      </Routes>

      <Routes>
        {/* <Route path="/kid's_Fashion" element={<LandingPage />} /> */}
      </Routes>

      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Routes>
        <Route path="/contact_us" element={<Contact />} />
      </Routes>

      <Routes>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Routes>
        <Route path="/details" element={<ProductDetails />} />
      </Routes>
      <Routes>
        <Route path="/category/:id/products" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/men-t-shirts/:id" element={<ProductDetails />} />
      </Routes>
      <Routes>
        <Route path="/men-jeans/:id" element={<ProductDetails />} />
      </Routes>
      <Routes>
        <Route path="/women-kurtas-suits/:id" element={<ProductDetails />} />
      </Routes>
      <Routes>
        <Route path="/women-tops/:id" element={<ProductDetails />} />
      </Routes>
      <Routes>
        <Route path="/baby-wares/:id" element={<ProductDetails />} />
      </Routes>
      
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Routes>
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Routes>
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
//  http://localhost:3001/category/women-kurtas-suits/products#
// http://localhost:3001/category/baby-wears/products