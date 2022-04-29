import {useEffect} from 'react'
import ReactGA from 'react-ga4'
import {Helmet} from 'react-helmet-async'
import {disablePageScroll, enablePageScroll} from 'scroll-lock'

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
export const stripWhitespace = string => string.replace(/\s/g, '')

/** Updates the page title. */
export const updateTitle = title => {
  return <Helmet><title>{title}</title></Helmet>
}

const updateBodyClassList = (add, className) => {
  if (add) document.body.classList.add(className)
  else document.body.classList.remove(className)
}

/** Enables or disables scrolling. */
export const setScrollingEnabled = enabled => {
  if (enabled) enablePageScroll()
  else disablePageScroll()
}

/** Enables or disables error mode. */
export const setErrorModeEnabled = enabled => {
  updateBodyClassList(enabled, 'error-mode')
}

/** Higher-order component (HOC) that adds Google Analytics tracking to the provided component. */
export const withTracker = Component => ({...props}) => {
  useEffect(() => ReactGA.send({hitType: "pageview", page: window.location.pathname}))
  return (
    <Component {...props} />
  )
}
