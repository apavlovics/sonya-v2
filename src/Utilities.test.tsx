import {stripSlashes} from './Utilities'

describe('Utilities should', () => {

  describe('given stripSlashes method', () => {

    test('strip slashes from the beginning and the end of the path', () => {
      const paths = ['path', '/path/', '/path', 'path/']
  
      paths.forEach(path => {
        expect(stripSlashes(path)).toBe("path")
      })
    })
  
    test('do not stript slashes from the middle of the path', () => {
      expect(stripSlashes("/some/other/path/")).toBe("some/other/path")
    })
  })
})
