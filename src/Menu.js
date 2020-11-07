import {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import MenuOpen from './icons/menu-open.svg'
import MenuClose from './icons/menu-close.svg'

function Menu(props) {
  const [t] = useTranslation()
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
          <MenuItem onClick={() => updateMaximized(false)} currentPathname={currentPathname} pathname="interior-design" title={t('Interior Design')}>
            {/* TODO Allow filtering previews 
            <ul className="submenu">
              <li className="selected">All</li>
              <li><Link to="/residential/">Residential</Link></li>
              <li><Link to="/retail/">Retail</Link></li>
            </ul>
            */}
          </MenuItem>
          <MenuItem onClick={() => updateMaximized(false)} currentPathname={currentPathname} pathname="interior-photo" title={t('Architectural Photo')} />
          <MenuItem onClick={() => updateMaximized(false)} currentPathname={currentPathname} pathname="contacts" title={t('Contacts')} />
        </ul>
        <ul className={`language-menu ${className}`}>
          <li className="selected">EN</li>
          <li><Link to="/lv/">LV</Link></li>
        </ul>
      </div>
    </nav>
  )
}

function MenuItem(props) {
  if (props.currentPathname === props.pathname) {
    return <li className="selected">{props.title}{props.children}</li>
  } else {
    return <li><Link to={`/${props.pathname}/`} onClick={props.onClick}>{props.title}</Link></li>
  }
}

export default withRouter(Menu)
