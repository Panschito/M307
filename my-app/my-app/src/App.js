import logo from "./logo.svg";
import "./App.css";
import { ProductCreateForm } from "./components/productCreateForm";
import { Authenticate } from "./components/authenticate";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={Authenticate}>Anmelden</button>
          <br></br>
          <button onClick={GetAllProducts}>Show all Products</button>
          <br></br>
          <button>Add Product</button>
          <br></br>
          <button>Edit Product</button>
          <br></br>
          <button>Delete Product</button>
          <br></br>
          <button>Show all Categorys</button>
          <br></br>
          <button>Add Category</button>
          <br></br>
          <button>Edit Category</button>
          <br></br>
          <button>Delete Category</button>
        </div>
      </header>
      <body></body>
    </div>
  );
}

export default App;
