import {useState, useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import useScrollPosition from '@react-hook/window-scroll'
import {useWindowWidth} from '@react-hook/window-size'
import MenuOpen from './icons/menu-open.svg'
import MenuClose from './icons/menu-close.svg'

function Menu(props) {
  const [t, i18n] = useTranslation()
  const scrollY = useScrollPosition(5)
  const width = useWindowWidth()
  const [maximized, setMaximized] = useState(false)

  // Allow scrolling when window width is more than 720px
  useEffect(() => {
    if (maximized && width <= 720) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [maximized, width])

  const currentPath = stripSlashes(props.location.pathname)
  const currentLanguage = i18n.language
  const currentPathNoLanguagePrefix = stripPrefix(currentPath, `${currentLanguage}/`)
  const stateClassName = maximized ? 'maximized' : 'minimized'
  const shadowClassName = scrollY > 0 ? ' shadow' : ''
  return (
    <nav className={`${stateClassName}${shadowClassName}`}>
      <div>
        <div className="logo">
          <div>Smart Casual</div>
          <img
              id={maximized ? 'menu-close' : 'menu-open'} 
              src={maximized ? MenuClose : MenuOpen}
              alt={maximized ? 'Close main menu' : 'Open main menu'}
              onClick={() => setMaximized(!maximized)} />
        </div>
        <ul className={`main-menu ${stateClassName}`}>
          {props.sections.map(section => (
            <MainMenuItem
                key={section.path}
                currentPath={currentPath}
                path={`${currentLanguage}/${section.path}`}
                title={t(section.title)}
                onClick={() => setMaximized(false)} />
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
                onClick={() => i18n.changeLanguage(language)} />
          ))}
        </ul>
      </div>
    </nav>
  )
}

const stripSlashes = (path) => {
  if (path.charAt(0) === '/') {
    path = path.substr(1)
  }
  if (path.charAt(path.length - 1) === '/') {
    path = path.substr(0, path.length - 1)
  }
  return path
}

const stripPrefix = (path, prefix) => {
  return path.startsWith(prefix) ? path.substr(prefix.length) : path
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
        <Link to={`/${props.path}/`} onClick={props.onClick}>
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
        <Link to={`/${props.language}/${props.currentPath}/`} onClick={props.onClick}>
          <div>
            <span>{title}</span>
          </div>
        </Link>
      </li>
    )
  }
}

export default withRouter(Menu)
