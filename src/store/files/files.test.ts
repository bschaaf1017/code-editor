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
  })
})