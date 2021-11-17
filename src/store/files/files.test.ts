import { 
  initialState,
  setFiles,
  addActiveFile,
  removeActiveFile,
  setEditorActiveFile,
  updateFileCode,
  filesReducer
} from './files'

describe('files slice', () => {

  it('should set user files when setFiles action is dispatched', () => {
    const userFiles = [
      {id: '1', name: 'index.js', relativePath: 'src/index.js', code: 'console.log("hello world")', extension: '.js'},
      {id: '2', name: 'notIndex.js', relativePath: 'src/notIndex.js', code: 'console.log("not hello world")', extension: '.js'},
      {id: '3', name: 'sliced.js', relativePath: 'src/sliced.js', code: 'console.log("hello slice")', extension: '.js'},      
    ]
    const expected = {
      ...initialState, 
      userFiles,
      activeFilesIds: [],
    }
    expect(filesReducer(initialState, setFiles(userFiles))).toEqual(expected)
  });

  it('should add file ids to activeFilesIds array when addActiveFile is dispatched', () => {
    const expected = {
      ...initialState,
      activeFilesIds: ['1'],
    }
    expect(filesReducer(initialState, addActiveFile('1'))).toEqual(expected)
    expect(filesReducer(expected, addActiveFile('2'))).toEqual({
      ...initialState,
      activeFilesIds: ['1', '2'],
    })
    expect(filesReducer({
      ...initialState,
      activeFilesIds: ['1', '2'],
    }, addActiveFile('3'))).toEqual({
      ...expected,
      activeFilesIds: ['1', '2', '3'],
    })
    expect(filesReducer({
      ...expected,
      activeFilesIds: ['1', '2', '3'],
    }, addActiveFile('4'))).toEqual({
      ...initialState,
      activeFilesIds: ['1', '2','3', '4'],
    })
  })

  it('should remove selected files from activeFilesIds', () => {
    const modifiedInitState = {
      ...initialState,
      activeFilesIds: ['1', '2', '3'],
    }
    const expected = {
      ...initialState,
      activeFilesIds: ['1', '2']
    }
    expect(filesReducer(modifiedInitState, removeActiveFile('3'))).toEqual(expected)
    expect(filesReducer(expected, removeActiveFile('2'))).toEqual({
      ...initialState,
      activeFilesIds: ['1']
    })
    expect(filesReducer({
      ...initialState,
      activeFilesIds: ['1']
    }, removeActiveFile('1'))).toEqual({
      ...initialState
    })
  })

  it('should set the active file id', () => {
    const expected = {
      ...initialState,
      editorActiveFileId: '1'
    }
    expect(filesReducer(initialState, setEditorActiveFile('1'))).toEqual(expected)
    expect(filesReducer(expected, setEditorActiveFile('2'))).toEqual({
      ...initialState,
      editorActiveFileId: '2'
    })
  })

  it('should add code to file', () => {
    const initState = {
      ...initialState,
      userFiles:
      [
      {id: '1', name: 'index.js', relativePath: 'src/index.js', code: 'console.log("hello world")', extension: '.js'},
      {id: '2', name: 'notIndex.js', relativePath: 'src/notIndex.js', code: 'console.log("not hello world")', extension: '.js'},
      {id: '3', name: 'sliced.js', relativePath: 'src/sliced.js', code: 'console.log("hello slice")', extension: '.js'},      
      ]
    };
    const payload = { fileId: '2', newCode: '() => "big dick"'}

    const expected = {
      ...initState,
      userFiles: 
      [
        {id: '1', name: 'index.js', relativePath: 'src/index.js', code: 'console.log("hello world")', extension: '.js'},
        {id: '2', name: 'notIndex.js', relativePath: 'src/notIndex.js', code: '() => "big dick"', extension: '.js'},
        {id: '3', name: 'sliced.js', relativePath: 'src/sliced.js', code: 'console.log("hello slice")', extension: '.js'},      
        ]
    }

    expect(filesReducer(initState, updateFileCode(payload))).toEqual(expected)

  })
})