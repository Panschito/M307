import React from "react";

export class ProductCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(ev) {
    console.log(ev);
    const { id, value } = ev.target;

    this.setState({ [id]: value });
  }

  async onSubmit() {
    const { edit, history } = this.props;
    console.log(this.state);

    const method = edit ? "put" : "post";

    await fetch(
      "https://campus.csbe.ch/sollberger-manuel/uek307/Authenticate",
      {
        method,
        body: this.state,
      }
    );
  }

  render() {
    const {
      product_id,
      sku,
      active,
      id_category,
      name,
      image,
      description,
      price,
      stock,
    } = this.state;

    return (
      // product_id,sku,active,id_category,name,image,description,price,stock
      <div>
        <form>
          <label>
            Enter Product ID:
            <input
              id="product_id"
              type="text"
              value={product_id}
              onChange={this.onValueChange}
            />
          </label>
          <lable>
            Enter sku:
            <input
              id="sku"
              type="text"
              value={sku}
              onChange={this.onValueChange}
            />
          </lable>
          <lable>
            Enter active:
            <input
              id="active"
              type="text"
              value={active}
              onChange={this.onValueChange}
            />
          </lable>
          <lable>
            Enter Category ID:
            <input
              id="id_category"
              type="text"
              value={id_category}
              onChange={this.onValueChange}
            />
          </lable>
          <lable>
            Enter name:
            <input
              id="name"
              type="text"
              value={name}
              onChange={this.onValueChange}
            />
          </lable>
          <lable>
            Image:
            <input
              id="image"
              alt="image"
              type="image"
              value={image}
              onChange={this.onValueChange}
            />
          </lable>
          <lable>
            description:
            <input
              id="description"
              type="text"
              value={description}
              onChange={this.onValueChange}
            />
          </lable>
          <lable>
            Enter price:
            <input
              id="price"
              type="text"
              value={price}
              onChange={this.onValueChange}
            />
          </lable>
          <lable>
            Enter stock:
            <input
              id="stock"
              type="text"
              value={stock}
              onChange={this.onValueChange}
            />
          </lable>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
