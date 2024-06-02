import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Theme from "./components/Theme";
import "./App.css";
import FullDetails from "./components/FullDetails";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Singleproduct from "./components/Singleproduct";
function App() {
  return (
    <div className=" bg-slate-100 dark:bg-slate-600">
      <Layout>
        <ToastContainer autoClose={3000} />
        <Theme />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/list-details"} element={<FullDetails />} />
          <Route path={"/products"} element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product-details/:id" element={<Singleproduct />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
