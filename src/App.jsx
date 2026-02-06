import "./App.css";
import Header from "./components/Header/Header.component";
import ProductList from "./components/ProductList/ProductList.component";
import Cart from "./components/Cart/Cart.component";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="layout">
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}

export default App;
