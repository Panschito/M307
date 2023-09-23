import React from "react";

export class DeleteProduct extends React.Component {
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

    await fetch(
      `https://campus.csbe.ch/sollberger-manuel/uek307/Product/${this.state.sku}`,
      {
        method: "delete",
        body: JSON.stringify(this.state),
      }
    );
  }
  render() {
    const { sku } = this.state;
    return (
      //sku
      <div>
        <form>
          <lable>
            Enter sku:
            <input
              id="sku"
              type="text"
              value={sku}
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
