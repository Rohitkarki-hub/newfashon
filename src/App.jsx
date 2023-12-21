import "./App.css";
import Collection from "./Components/Collection";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Review from "./Components/Review";
import Shop from "./Components/Shop";

function App() {
  return (
    <>
      <div>
        <Navbar />
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
    </>
  );
}

export default App;
