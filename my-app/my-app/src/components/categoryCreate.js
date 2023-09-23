import React from "react";

export class CategoryCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
      `https://campus.csbe.ch/sollberger-manuel/uek307/Product/${this.state.sku}`,
      {
        method,
        body: JSON.stringify(this.state),
      }
    );
  }

  render() {
    const { id_category, active, name } = this.state;
    return (
      // category_id,active,name
      <div>
        <form>
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
            Enter active:
            <input
              id="active"
              type="text"
              value={active}
              onChange={this.onValueChange}
            />
          </lable>
          <lable>
            Enter category name:
            <input
              id="name"
              type="text"
              value={name}
              onChange={this.onValueChange}
            />
          </lable>
          <div className="btn btn-primary" onClick={this.onSubmit}>
            Submit
          </div>
        </form>
      </div>
    );
  }
}
