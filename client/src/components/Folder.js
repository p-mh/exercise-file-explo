import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { changeCreating } from '../utils/utilsFunc';

import CreateElement from './CreateElement';

export default class Folder extends Component {
  state = {
    isCreating: false,
  };

  toggleCreating = type => {
    this.setState(changeCreating(type));
  };

  render() {
    const { isCreating } = this.state;
    const folderContent = this.props.content.map(({ name, url }, index) => (
      <div key={index}>
        <Link to={url ? `${url}/${name}` : `/${name}`}>{name}</Link>
      </div>
    ));
    return (
      <div>
        <div>{folderContent}</div>
        <div>
          {!isCreating ? (
            <div>
              <button onClick={this.toggleCreating.bind(this, 'file')}>
                Add file
              </button>
              <button onClick={this.toggleCreating.bind(this, 'folder')}>
                Add folder
              </button>
            </div>
          ) : (
            <CreateElement
              type={isCreating}
              path={this.props.path}
              toggleCreating={this.toggleCreating}
              updateData={this.props.updateData}
            />
          )}
        </div>
      </div>
    );
  }
}
