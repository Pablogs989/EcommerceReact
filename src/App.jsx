import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";
import { ProductProvider } from "./context/ProductContext/ProductState";

import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <body>
        <Router>
        <div className="content">

          <Header />
          <UserProvider>
            <ProductProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </ProductProvider>
          </UserProvider>
          </div>
          <Footer />
        </Router>
      </body>
    </div>
  );
}

export default App;
