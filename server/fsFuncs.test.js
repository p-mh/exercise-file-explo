const FsFuncs = require('./fsFuncs');

const fs = require('fs');
jest.mock('fs');

const rimraf = require('rimraf');

describe('getElementType', () => {
  const fsStatSync = jest.fn(() => {});
  beforeEach(() => (fs.statSync = fsStatSync));
  afterEach(() => fs.statSync.mockRestore());
  test('fs.statSync should be called', () => {
    FsFuncs.getElementType();
    expect(fsStatSync).toBeCalled();
  });
  test('fs.statSync should be called with correct props', () => {
    FsFuncs.getElementType('./path');
    expect(fsStatSync).toBeCalledWith('./path');
  });
});

describe('getFolders', () => {
  const fsReaddir = jest.fn(() => {});
  beforeEach(() => (fs.readdirSync = fsReaddir));
  afterEach(() => fs.readdirSync.mockRestore());
  test('fs.readdirSync should be called', () => {
    FsFuncs.getFolders();
    expect(fsReaddir).toBeCalled();
  });
  test('fs.readdirSync should be called width correct props', () => {
    FsFuncs.getFolders('./path');
    expect(fsReaddir).toBeCalledWith('./path', { withFileTypes: true });
  });
});

describe('createFolder', () => {
  const fsMkdir = jest.fn(() => {});
  beforeEach(() => (fs.mkdirSync = fsMkdir));
  afterEach(() => fs.mkdirSync.mockRestore());
  test('fs.mkdirSync should be called', () => {
    FsFuncs.createFolder();
    expect(fsMkdir).toHaveBeenCalled();
  });
  test('fs.mkdirSync should be called with correct props', () => {
    FsFuncs.createFolder('./path');
    expect(fsMkdir).toHaveBeenCalledWith('./path', expect.any(Function));
  });
});

describe('deleteFolder', () => {
  test('rimraf should be called', () => {
    FsFuncs.deleteFolder('./path');
    expect(rimraf).toHaveBeenCalled();
  });
  test('rimraf should be called with correct props', () => {
    FsFuncs.deleteFolder('./path');
    expect(rimraf).toHaveBeenCalledWith('./path', expect.any(Function));
  });
});

describe('getFile', () => {
  const fsReadF = jest.fn(() => {});
  beforeEach(() => (fs.readFileSync = fsReadF));
  afterEach(() => fs.readFileSync.mockRestore());
  test('fs.readFileSync should have been called', () => {
    FsFuncs.getFile();
    expect(fsReadF).toHaveBeenCalled();
  });
  test('fs.readFileSync should have been called with correct props', () => {
    FsFuncs.getFile('./path');
    expect(fsReadF).toHaveBeenCalledWith('./path', 'utf8');
  });
});

describe('createFile', () => {
  const fsWriteF = jest.fn(() => {});
  beforeEach(() => (fs.writeFileSync = fsWriteF));
  afterEach(() => fs.writeFileSync.mockRestore());
  test('fs.writeFileSync should have been called ', () => {
    FsFuncs.createFile();
    expect(fsWriteF).toHaveBeenCalled();
  });
  test('fs.writeFileSync should have been called with correct props ', () => {
    FsFuncs.createFile('./path', ['data']);
    expect(fsWriteF).toHaveBeenCalledWith(
      './path',
      ['data'],
      expect.any(Function)
    );
  });
});

describe('deleteFile', () => {
  const fsUnlink = jest.fn(() => {});
  beforeEach(() => (fs.unlinkSync = fsUnlink));
  afterEach(() => fs.unlinkSync.mockRestore());
  test('fs.unlinkSync should have been called', () => {
    FsFuncs.deleteFile();
    expect(fsUnlink).toHaveBeenCalled();
  });
  test('fs.unlinkSync should have been called with correct props', () => {
    FsFuncs.deleteFile('./path');
    expect(fsUnlink).toHaveBeenCalledWith('./path', expect.any(Function));
  });
});

describe('createCallback', () => {
  // test('should throw en error', done => {
  //   FsFuncs.createCallback('./path', () => {
  //     expect().toThrow();
  //     done();
  //   });
  // });
});

describe('deleteCallback', () => {});
