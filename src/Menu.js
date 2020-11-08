import {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import MenuOpen from './icons/menu-open.svg'
import MenuClose from './icons/menu-close.svg'

function Menu(props) {
  const [t, i18n] = useTranslation()
  const [maximized, setMaximized] = useState(false)

  const updateMaximized = (maximized) => {
    if (maximized) {
      document.body.classList.add('no-scroll')
    } else {
      // TODO Remove no-scroll class when window is resized
      document.body.classList.remove('no-scroll')
    }
    setMaximized(maximized)
  }

  const currentPath = stripSlashes(props.location.pathname)
  const currentLanguage = i18n.language
  const currentPathNoLanguagePrefix = stripPrefix(currentPath, `${currentLanguage}/`)
  const className = maximized ? 'maximized' : 'minimized'
  return (
    <nav className={className}>
      <div>
        <div className="logo">
          <div>Smart Casual</div>
          <img
              id={maximized ? 'menu-close' : 'menu-open'} 
              src={maximized ? MenuClose : MenuOpen}
              alt={maximized ? 'Close main menu' : 'Open main menu'}
              onClick={() => updateMaximized(!maximized)} />
        </div>
        <ul className={`main-menu ${className}`}>
          {props.sections.map(section => (
            <MainMenuItem
                key={section.path}
                currentPath={currentPath}
                path={`${currentLanguage}/${section.path}`}
                title={t(section.title)}
                onClick={() => updateMaximized(false)} />
          ))}
          {/* TODO Allow filtering previews 
            <ul className="submenu">
              <li className="selected">All</li>
              <li><Link to="/residential/">Residential</Link></li>
              <li><Link to="/retail/">Retail</Link></li>
            </ul>
          */}
        </ul>
        <ul className={`language-menu ${className}`}>

          {/* Menu languages are sorted alphabetically to have constant ordering */}
          {[...i18n.languages].sort().map(language => (
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
    return <li className="selected">{props.title}{props.children}</li>
  } else {
    return <li><Link to={`/${props.path}/`} onClick={props.onClick}>{props.title}</Link></li>
  }
}

function LanguageMenuItem(props) {
  const title = props.language.toUpperCase()
  if (props.currentLanguage === props.language) {
    return <li className="selected">{title}</li>
  } else {
    return (
      <li><Link to={`/${props.language}/${props.currentPath}/`} onClick={props.onClick}>{title}</Link></li>
    )
  }
}

export default withRouter(Menu)
