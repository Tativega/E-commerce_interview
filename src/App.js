import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/actions/products";
import { Products } from "./Components/Body/Products";
import { Banner } from "./Components/Body/Banner";
import { NavBar } from "./Components/Header/Navbar";
import { Footer } from "./Components/Footer";

function App() {

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filtered);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [filters]);

  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
