import {ReactNode, useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {useWindowWidth} from '@react-hook/window-size'
import {Section} from './App'
import {setScrollingEnabled, stripSlashes, stripPrefix} from './Utilities'

interface MenuProps {
  hidden: boolean
  sections: readonly Section[]
}

export default function Menu(props: MenuProps) {
  const [t, i18n] = useTranslation()
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

  const location = useLocation()
  const currentPath = stripSlashes(location.pathname)
  const currentLanguage = i18n.language
  const fallbackLanguages = i18n.options.fallbackLng instanceof Array ? i18n.options.fallbackLng : []
  const currentPathNoLanguagePrefix = stripPrefix(currentPath, `${currentLanguage}/`)
  const stateClassName = maximized ? 'maximized' : 'minimized'
  const hiddenClassName = props.hidden ? ' hidden' : ''
  return (
    <nav className={`${stateClassName}${hiddenClassName}`}>
      <div>
        <div className="logo">
          <Title
              title={t('Main Title')}
              currentLanguage={currentLanguage}
              currentPathNoLanguagePrefix={currentPathNoLanguagePrefix} 
              onClick={() => setMaximized(false)} />
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
        </ul>
        <ul className={`language-menu ${stateClassName}`}>
          {fallbackLanguages.map((language: string) => (
            <LanguageMenuItem
                key={language}
                currentLanguage={currentLanguage}
                language={language}
                currentPathNoLanguagePrefix={currentPathNoLanguagePrefix}
                onClick={() => i18n.changeLanguage(language)}
                hidden={props.hidden} />
          ))}
        </ul>
      </div>
    </nav>
  )
}

interface TitleProps {
  title: string
  currentPathNoLanguagePrefix: string
  currentLanguage: string
  onClick: () => void
}

function Title(props: TitleProps) {
  const titlePath = 'interior-design'
  if (props.currentPathNoLanguagePrefix === titlePath) {
    return (<div onClick={props.onClick}>{props.title}</div>)
  } else {
    return (
      <Link
          to={`/${props.currentLanguage}/${titlePath}/`}
          onClick={props.onClick}>
        <div>{props.title}</div>
      </Link>
    )
  }
}

interface MenuIconProps {
  maximized: boolean
  onClick: () => void
}

function MenuIcon(props: MenuIconProps) {
  return (
    <svg onClick={props.onClick} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      {props.maximized
        ? <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        : <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      }
    </svg>
  )
}

interface MainMenuItemProps {
  children?: readonly ReactNode[]
  currentPath: string
  path: string
  title: string
  hidden: boolean
  onClick: () => void
}

function MainMenuItem(props: MainMenuItemProps) {
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
            {...(props.hidden ? {tabIndex: -1} : {})}>
          <div>
            <span>{props.title}</span>
          </div>
        </Link>
      </li>
    )
  }
}

interface LanguageMenuItemProps {
  language: string
  currentLanguage: string
  currentPathNoLanguagePrefix: string
  hidden: boolean
  onClick: () => void
}

function LanguageMenuItem(props: LanguageMenuItemProps) {
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
            to={`/${props.language}/${props.currentPathNoLanguagePrefix}/`}
            onClick={props.onClick}
            {...(props.hidden ? {tabIndex: -1} : {})}>
          <div>
            <span>{title}</span>
          </div>
        </Link>
      </li>
    )
  }
}
