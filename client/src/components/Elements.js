import React, { Component } from 'react';

import { fetchElement, deleteElement } from '../utils/fileAndFolderAPI';
import Folder from './Folder';
import File from './File';

class Elements extends Component {
  state = {
    content: [],
    type: null,
  };
  componentDidMount() {
    this.getContent();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params[0] !== prevProps.match.params[0]) {
      this.getContent();
    }
  }
  getContent = async () => {
    const { content, type } = await fetchElement(this.props.match.params[0]);
    this.setState({ content, type });
  };

  deleteElem = async () => {
    await deleteElement(this.props.match.params[0]);
    const prevPath = this.props.match.params[0].match(/(.*)(\/.*$)/);
    this.props.history.push(`/${prevPath ? prevPath[1] : ''}`);
  };

  render() {
    return (
      <div>
        <div>
          {this.state.type === 'file' ? (
            <File
              path={this.props.match.params[0]}
              content={this.state.content}
              updateData={this.getContent.bind(this)}
            />
          ) : (
            <Folder
              path={this.props.match.params[0]}
              content={this.state.content}
              updateData={this.getContent.bind(this)}
            />
          )}
        </div>
        <div>
          <button onClick={this.deleteElem}>Delete {this.state.type}</button>
        </div>
      </div>
    );
  }
}

export default Elements;
