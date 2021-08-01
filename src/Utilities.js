import {Helmet} from 'react-helmet-async'

/** Strips one "/" slash from the beginning and the end of the path, if it is present. */
export const stripSlashes = path => {
  if (path.charAt(0) === '/') {
    path = path.substr(1)
  }
  if (path.charAt(path.length - 1) === '/') {
    path = path.substr(0, path.length - 1)
  }
  return path
}

/** Strips the prefix string from the path, if it is present. */
export const stripPrefix = (path, prefix) => {
  return path.startsWith(prefix) ? path.substr(prefix.length) : path
}

/** Strips all whitespace characters from the string. */
export const stripWhitespace = string => string.replace(/\s/g, "")

/** Formats the page title. */
export const formatTitle = (sectionTitle, mainTitle) => {
  const fullTitle = sectionTitle === '' ? mainTitle : `${mainTitle}: ${sectionTitle}`
  return <Helmet><title>{fullTitle}</title></Helmet>
}

const updateBodyClassList = (add, className) => {
  if (add) document.body.classList.add(className)
  else document.body.classList.remove(className)
}

/** Enables or disables scrolling. */
export const setScrollingEnabled = enabled => {
  updateBodyClassList(!enabled, 'no-scroll')
}

/** Enables or disables error mode. */
export const setErrorModeEnabled = enabled => {
  updateBodyClassList(enabled, 'error-mode')
}
