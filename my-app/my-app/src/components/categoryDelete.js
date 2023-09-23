import React from "react";

export class DeleteCategory extends React.Component {
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

    await fetch(
      `https://campus.csbe.ch/sollberger-manuel/uek307/Product/${this.state.category_id}`,
      {
        method: "delete",
        body: this.state,
      }
    );
  }
  render() {
    const { category_id } = this.state;
    return (
      //sku
      <div>
        <form>
          <lable>
            Enter sku:
            <input
              id="category_id"
              type="text"
              value={category_id}
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
