import Header from "./components/header/Header";
import Products from "./components/products/Products";

const App = () => {
  return (
    <div>
      <Header />
      <div className="line"></div>
      <Products />
      <div className="line"></div>
    </div>
  )
}

export default App;
