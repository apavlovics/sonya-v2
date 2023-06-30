import { stripPrefix, stripSlashes } from './Utilities'

describe('Utilities should', () => {

  describe('given stripSlashes function', () => {

    test('strip slashes from the beginning and the end of the path', () => {
      const paths = ['path', '/path/', '/path', 'path/']

      paths.forEach(path => {
        expect(stripSlashes(path)).toBe('path')
      })
    })

    test('do not stript slashes from the middle of the path', () => {
      expect(stripSlashes('/some/other/path/')).toBe('some/other/path')
    })
  })

  describe('given stripPrefix function', () => {

    test('strip prefix from the path when it is present', () => {
      expect(stripPrefix('some/test/path', 'some/')).toBe('test/path')
    })

    test('do not change the path when the prefix is not present', () => {
      const path = 'some/test/path'
      expect(stripPrefix(path, 'prefix')).toBe(path)
    })
  })
})
