//FOLDER.js
export const changeCreating = type => prevState => ({
  isCreating: prevState.isCreating ? false : type,
});

//FILE.js
export const changeDisabledTextArea = prevState => ({
  disabledTextArea: !prevState.disabledTextArea,
});
