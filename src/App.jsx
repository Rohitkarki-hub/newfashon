import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";
import Collection from "./Components/Collection";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Review from "./Components/Review";
import Shop from "./Components/Shop";
import { useState } from "react";
import Cart from "./Components/Cart";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [ShowCart, setShowCart] = useState(false);
  return (
    <>
      <Provider store={store}>
        <div>
          <Navbar setShowCart={setShowCart} />
          {ShowCart && <Cart setShowCart={setShowCart} />}
        </div>
        <div id="home">
          <Hero />
        </div>
        <div id="shop">
          <Shop />
        </div>
        <Collection />
        <div id="features">
          <Features />
        </div>

        <div id="products">
          <Products />
        </div>
        <div id="review">
          <Review />
        </div>

        <Footer />
        <Toaster position="bottom-center" reverseOrder={false} />
      </Provider>
    </>
  );
};

export default App;
