import axios from 'axios';

export const fetchElement = async path => {
  const { data } = await axios.get('/folderManagement', { params: { path } });
  return data;
};

export const deleteElement = async path => {
  await axios.delete('/folderManagement', { params: { path } });
};

export const createElement = async (path, name, type) => {
  await axios.post('/folderManagement', { type, path: `${path}/${name}` });
};

export const changeFile = async (path, text) => {
  await axios.put('/folderManagement', { text, path });
};
