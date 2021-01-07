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

/** Formats the page title. */
export const formatTitle = title => {
  const fullTitle = title === '' ? 'Smart Casual' : `${title} | Smart Casual`
  return <Helmet><title>{fullTitle}</title></Helmet>
}

/** Enables or disables scrolling. */
export const setScrollingEnabled = enabled => {
  if (enabled) document.body.classList.remove('no-scroll')
  else document.body.classList.add('no-scroll')
}