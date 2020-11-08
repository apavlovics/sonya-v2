import {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import MenuOpen from './icons/menu-open.svg'
import MenuClose from './icons/menu-close.svg'

function Menu(props) {
  const [t, i18n] = useTranslation()
  const [maximized, setMaximized] = useState(false)

  const stripSlashes = (pathname) => {
    if (pathname.charAt(0) === '/') {
      pathname = pathname.substr(1)
    }
    if (pathname.charAt(pathname.length - 1) === '/') {
      pathname = pathname.substr(0, pathname.length - 1)
    }
    return pathname
  }

  const updateMaximized = (maximized) => {
    if (maximized) {
      document.body.classList.add('no-scroll')
    } else {
      // TODO Remove no-scroll class when window is resized
      document.body.classList.remove('no-scroll')
    }
    setMaximized(maximized)
  }

  const currentPathname = stripSlashes(props.location.pathname)
  const currentLanguage = i18n.language
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
                currentPathname={currentPathname}
                pathname={`${currentLanguage}/${section.path}`}
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
          {i18n.languages.map(language => (
            <LanguageMenuItem
                key={language}
                currentLanguage={currentLanguage}
                language={language} />
          ))}
        </ul>
      </div>
    </nav>
  )
}

function MainMenuItem(props) {
  if (props.currentPathname === props.pathname) {
    return <li className="selected">{props.title}{props.children}</li>
  } else {
    return <li><Link to={`/${props.pathname}/`} onClick={props.onClick}>{props.title}</Link></li>
  }
}

function LanguageMenuItem(props) {
  if (props.currentLanguage === props.language) {
    return <li className="selected">{props.language.toUpperCase()}</li>
  } else {
    return <li><Link to={`/${props.language}/`}>{props.language.toUpperCase()}</Link></li>
  }
}

export default withRouter(Menu)
