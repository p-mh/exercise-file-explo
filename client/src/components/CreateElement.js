import React, { Component } from 'react';
import { createElement } from '../utils/fileAndFolderAPI';

export default class CreateElement extends Component {
  state = {
    inputValue: '',
  };
  changeInputValue = ({ target: { value: inputValue } }) => {
    this.setState({
      inputValue,
    });
  };

  validateCreating = async () => {
    const { type, path } = this.props;
    const { inputValue } = this.state;
    await createElement(path, inputValue, type);
    this.props.toggleCreating();
    this.props.updateData();
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeInputValue} />
        <button onClick={this.validateCreating}>
          Create {this.props.type}
        </button>
        <button onClick={this.props.toggleCreating}>Cancel</button>
      </div>
    );
  }
}
