// Strips one "/" slash from the beginning and the end of the path, if it is present.
export const stripSlashes = (path) => {
  if (path.charAt(0) === '/') {
    path = path.substr(1)
  }
  if (path.charAt(path.length - 1) === '/') {
    path = path.substr(0, path.length - 1)
  }
  return path
}

// Strips the prefix string from the path, if it is present.
export const stripPrefix = (path, prefix) => {
  return path.startsWith(prefix) ? path.substr(prefix.length) : path
}
