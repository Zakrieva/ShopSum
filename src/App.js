import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="line"></div>
      <Products />
      <div className="line"></div>
      <Footer />
    </div>
  )
}

export default App;
