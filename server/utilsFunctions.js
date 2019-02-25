const formatFolderContent = (content, path) => {
  return content.map(elem => ({
    name: elem.name,
    type: elem.isDirectory() ? 'folder' : 'file',
    url: path,
  }));
};

module.exports = {
  formatFolderContent,
};
