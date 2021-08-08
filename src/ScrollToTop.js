import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

/**
 * Scrolls to the top of the page on every transition.
 * 
 * The implementation is inspired by the following Slack Overflow answer:
 * https://stackoverflow.com/a/54343182
 */
function ScrollToTop() {
  const history = useHistory()
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0)
    })
    return () => unlisten()
  }, [history])
  return (null)
}

export default ScrollToTop
