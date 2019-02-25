const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {
  getElementType,
  getFolders,
  createFolder,
  deleteFolder,
  getFile,
  createFile,
  deleteFile,
} = require('./fsFuncs');

const { formatFolderContent } = require('./utilsFunctions');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/folderManagement', (req, res) => {
  const path = req.query.path;
  const pathType = getElementType(`./folders/${path}`);
  if (pathType.isDirectory()) {
    const result = getFolders(`./folders/${path}`);
    const content = formatFolderContent(result, path);
    res.json({ content, type: 'folder' });
  }
  if (pathType.isFile()) {
    const content = getFile(`./folders/${path}`);
    res.json({ content, type: 'file' });
  }
});

app.post('/folderManagement', (req, res) => {
  const path = req.body.path;
  const type = req.body.type;
  if (type === 'file') {
    createFile(`./folders/${path}`, 'Empty file');
    res.sendStatus(201);
  } else {
    createFolder(`./folders/${path}`);
    res.sendStatus(201);
  }
});

app.put('/folderManagement', (req, res) => {
  const path = req.body.path;
  const data = req.body.text ? req.body.text : '';
  createFile(`./folders/${path}`, data);
  res.sendStatus(204);
});

app.delete('/folderManagement', (req, res) => {
  const path = req.query.path;
  pathType = getElementType(`./folders/${path}`);
  if (pathType.isFile()) {
    deleteFile(`./folders/${path}`);
  }
  if (pathType.isDirectory()) {
    deleteFolder(`./folders/${path}`);
  }
  res.sendStatus(204);
});

app.listen(8080, function() {
  console.log('server started');
});
