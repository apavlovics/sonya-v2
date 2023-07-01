import { stripPrefix, stripSlashes, stripWhitespace } from './Utilities'

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

  describe('given stripWhitespace function', () => {

    test('strip whitespace from the string when it is present', () => {
      expect(stripWhitespace(' test -string ')).toBe('test-string')
    })

    test('do not change the string when the whitespace is not present', () => {
      const string = 'test-string'
      expect(stripWhitespace(string)).toBe(string)
    })
  })
})
