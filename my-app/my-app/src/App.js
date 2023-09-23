import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Authenticate from "./components/authenticate";
import { CategoryCreate } from "./components/categoryCreate";
import { DeleteCategory } from "./components/categoryDelete";
import { ProductCreateForm } from "./components/productCreateForm";
import { DeleteProduct } from "./components/productDelete";
import { Routes, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productCreateForm: false,
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>

        <Link to="/authenticate">Authenticate</Link>
        <Link to="/listProducts">Show all Products</Link>
        <Link to="/listCategorys">Show all Categorys</Link>
        <Link to="/createProduct">Create Product</Link>
        <Link to="/editProduct">Edit Product</Link>
        <Link to="/deleteProduct">Delete Product</Link>
        <Link to="/createCategory">Create Category</Link>
        <Link to="/editCategory">Edit Category</Link>
        <Link to="/deleteCategory">Delete Category</Link>

        <Routes>
          <Route path="authenticate" element={<Authenticate />} />
          <Route
            path="createProduct"
            element={<ProductCreateForm edit={false} />}
          />
          <Route
            path="editProduct"
            element={<ProductCreateForm edit={true} />}
          />
          <Route path="deleteProduct" element={<DeleteProduct />} />
          <Route path="createCategory" element={<CategoryCreate />} />
          <Route path="editCategory" element={<CategoryCreate />} />
          <Route path="deleteCategory" element={<DeleteCategory />} />
        </Routes>
      </div>
    );
  }
}

export default App;
