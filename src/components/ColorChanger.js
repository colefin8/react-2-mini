import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    return (
      <select className="dropDownContainer" onChange={(e) => this.props.update(e.target.value)} disabled={this.props.allowEdit === "false"}>
      
      {/* <select className="dropDownContainer" onChange={(e) => {
        return props.update(e.target.value)
        }
      }> */}
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    );
  }
}
