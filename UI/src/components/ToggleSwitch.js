import React, { Component } from "react";
import Switch from "react-switch";

class ToggleSwitch extends Component {
//   constructor() {
//     super();
//     this.state = { checked: false };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(checked) {
//     this.props.port({ checked });
//   }

  render() {
    return (
      <label>
        {/* <span>PORT 1</span> */}
        <Switch
            checked={this.props.checked}
            onChange={this.props.handleChange}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={40}
            className="react-switch"
            id="material-switch"
          />
      </label>
    );
  }
}

export default ToggleSwitch;