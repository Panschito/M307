import React from "react";

export class ProductCreateForm extends React.Component {
  render() {
    return (
      // product_id,sku,active,id_category,name,image,description,price,stock
      <div>
        <form>
          <label>
            Enter Product ID:
            <input
              type="text"
              value={product_id}
              onChange={(e) => setProduct_id(e.target.value)}
            />
          </label>
          <lable>
            Enter sku:
            <input
              type="text"
              value={sku}
              onChange={(p) => setSku(p.target.value)}
            />
          </lable>
          <lable>
            Enter active:
            <input
              type="text"
              value={active}
              onChange={(w) => setActive(w.target.value)}
            />
          </lable>
          <lable>
            Enter Category ID:
            <input
              type="text"
              value={id_category}
              onChange={(f) => setid_category(f.target.value)}
            />
          </lable>
          <lable>
            Enter name:
            <input
              type="text"
              value={name}
              onChange={(n) => setName(n.target.value)}
            />
          </lable>
          <lable>
            Image:
            <input
              type="image"
              value={image}
              onChange={(i) => setImage(i.target.value)}
            />
          </lable>
          <lable>
            description:
            <input
              type="text"
              value={description}
              onChange={(d) => setDescription(d.target.value)}
            />
          </lable>
          <lable>
            Enter price:
            <input
              type="text"
              value={price}
              onChange={(h) => setPrice(h.target.value)}
            />
          </lable>
          <lable>
            Enter stock:
            <input
              type="text"
              value={stock}
              onChange={(po) => setStock(po.target.value)}
            />
          </lable>
        </form>
      </div>
    );
  }
}
