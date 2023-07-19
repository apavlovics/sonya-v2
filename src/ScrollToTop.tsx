import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top of the page on every transition.
 *
 * The implementation is inspired by the following Slack Overflow answer:
 * https://stackoverflow.com/a/54343182
 */
export default function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}
