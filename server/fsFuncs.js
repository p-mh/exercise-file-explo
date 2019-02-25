const fs = require('fs');
const rimraf = require('rimraf');

const getElementType = path => fs.statSync(path);

const getFolders = path => fs.readdirSync(path, { withFileTypes: true });
const createFolder = path => fs.mkdirSync(path, createCallback(path));
const deleteFolder = path => rimraf(path, deleteCallback(path));

const getFile = path => fs.readFileSync(path, 'utf8');
const createFile = (path, data) =>
  fs.writeFileSync(path, data, createCallback(path));
const deleteFile = path => fs.unlinkSync(path, deleteCallback(path));

const createCallback = path => err => {
  if (err) throw err;
  console.log(`${path} was created`);
};
const deleteCallback = path => err => {
  if (err) throw err;
  console.log(`${path} was deleted`);
};

module.exports = {
  getElementType,
  getFolders,
  createFolder,
  deleteFolder,
  getFile,
  createFile,
  deleteFile,
  createCallback,
  deleteCallback,
};
