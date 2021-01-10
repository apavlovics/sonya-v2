import {useState, useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import useScrollPosition from '@react-hook/window-scroll'
import {useWindowWidth} from '@react-hook/window-size'
import {setScrollingEnabled, stripSlashes, stripPrefix} from './Utilities'

function Menu(props) {
  const [t, i18n] = useTranslation()
  const scrollY = useScrollPosition(5)
  const width = useWindowWidth()
  const [maximized, setMaximized] = useState(false)

  // Allow scrolling when window width is more than 720px
  useEffect(() => {
    if (maximized && width <= 720) {
      setScrollingEnabled(false)
    } else {
      setScrollingEnabled(true)
    }
  }, [maximized, width])

  const currentPath = stripSlashes(props.location.pathname)
  const currentLanguage = i18n.language
  const currentPathNoLanguagePrefix = stripPrefix(currentPath, `${currentLanguage}/`)
  const stateClassName = maximized ? 'maximized' : 'minimized'
  const shadowClassName = scrollY > 0 ? ' shadow' : ''
  const hiddenClassName = props.hidden ? ' hidden' : ''
  return (
    <nav className={`${stateClassName}${shadowClassName}${hiddenClassName}`}>
      <div>
        <div className="logo">
          <div>Smart Casual</div>
          <MenuIcon maximized={maximized} onClick={() => setMaximized(!maximized)} />
        </div>
        <ul className={`main-menu ${stateClassName}`}>
          {props.sections.map(section => (
            <MainMenuItem
                key={section.path}
                currentPath={currentPath}
                path={`${currentLanguage}/${section.path}`}
                title={t(section.title)}
                onClick={() => setMaximized(false)}
                hidden={props.hidden} />
          ))}
          {/* TODO Allow filtering previews 
            <ul className="submenu">
              <li className="selected">All</li>
              <li><Link to="/residential/">Residential</Link></li>
              <li><Link to="/retail/">Retail</Link></li>
            </ul>
          */}
        </ul>
        <ul className={`language-menu ${stateClassName}`}>
          {i18n.options.fallbackLng.map(language => (
            <LanguageMenuItem
                key={language}
                currentLanguage={currentLanguage}
                language={language}
                currentPath={currentPathNoLanguagePrefix}
                onClick={() => i18n.changeLanguage(language)}
                hidden={props.hidden} />
          ))}
        </ul>
      </div>
    </nav>
  )
}

function MenuIcon(props) {
  return (
    <svg width="2em" height="2em" onClick={props.onClick} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      {props.maximized
        ? <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        : <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      }
    </svg>
  )
}

function MainMenuItem(props) {
  if (props.currentPath === props.path) {
    return (
      <li className="selected">
        <div>{props.title}{props.children}</div>
      </li>
    )
  } else {
    return (
      <li>
        <Link
            to={`/${props.path}/`}
            onClick={props.onClick}
            {...(props.hidden ? {tabindex: '-1'} : {})}>
          <div>
            <span>{props.title}</span>
          </div>
        </Link>
      </li>
    )
  }
}

function LanguageMenuItem(props) {
  const title = props.language.toUpperCase()
  if (props.currentLanguage === props.language) {
    return (
      <li className="selected">
        <div>{title}</div>
      </li>
    )
  } else {
    return (
      <li>
        <Link
            to={`/${props.language}/${props.currentPath}/`}
            onClick={props.onClick}
            {...(props.hidden ? {tabindex: '-1'} : {})}>
          <div>
            <span>{title}</span>
          </div>
        </Link>
      </li>
    )
  }
}

export default withRouter(Menu)
