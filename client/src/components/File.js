import React, { Component } from 'react';
import { changeFile } from '../utils/fileAndFolderAPI';

import { changeDisabledTextArea } from '../utils/utilsFunc';

export default class File extends Component {
  state = {
    currentContent: '',
    disabledTextArea: true,
  };
  componentDidMount() {
    this.setState({
      currentContent: this.props.content,
    });
  }

  changeText = ({ target: { value: currentContent } }) => {
    this.setState({ currentContent });
  };

  changeFileAllowed = () => {
    this.setState(changeDisabledTextArea);
  };

  saveChange = async () => {
    await changeFile(`${this.props.path}`, this.state.currentContent);
    this.changeFileAllowed();
    this.props.updateData();
  };

  render() {
    const { currentContent, disabledTextArea } = this.state;
    return (
      <div>
        <div>
          <textarea
            rows="15"
            cols="50"
            value={currentContent}
            onChange={this.changeText}
            disabled={disabledTextArea}
          />
        </div>
        <div>
          {disabledTextArea ? (
            <div>
              <button onClick={this.changeFileAllowed}>Change File</button>
            </div>
          ) : (
            <button onClick={this.saveChange}>Save change</button>
          )}
        </div>
      </div>
    );
  }
}
