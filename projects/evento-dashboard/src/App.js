import "./Style/App.css";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
// import ProductList from './Pages/Product/ProductList';
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getAuthAdmin, getAuthType, setAuthType } from "./Core/Helper/storage";

const initializeLocalStorage = () => {
  if (!getAuthType()) {
    setAuthType("guest")
  }
};
function App() {
  useEffect(() => {
    initializeLocalStorage();
  }, []); // Empty dependency array ensures this runs only once when the component mounts
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
