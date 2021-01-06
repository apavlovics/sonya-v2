import {useState} from 'react'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import {useTranslation} from 'react-i18next'
import AnimatedSwitch from './AnimatedSwitch'
import ArchitecturalPhoto from './ArchitecturalPhoto'
import Contacts from './Contacts'
import Menu from './Menu'
import Previews from './Previews'
import {formatTitle} from './Utilities'

export default function App() {
  const [t, i18n] = useTranslation()
  const [menuHidden, setMenuHidden] = useState(false)

  // All website sections are defined below
  const sections = [{
    path: 'interior-design',
    title: 'Interior Design',
  }, {
    path: 'arhitectural-photo',
    title: 'Architectural Photo',
  }, {
    path: 'contacts',
    title: 'Contacts',
  }]

  const renderSection = sectionPath => {
    switch(sectionPath) {
      case 'interior-design':    return <Previews setMenuHidden={setMenuHidden} />
      case 'arhitectural-photo': return <ArchitecturalPhoto />
      case 'contacts':           return <Contacts />
      default:                   throw new Error(`Unexpected section path: ${sectionPath}`)
    }
  }

  const currentLanguage = i18n.language
  return (
    <HelmetProvider>
      <Router>
        {formatTitle('')}
        <Menu sections={sections} hidden={menuHidden} />

        <AnimatedSwitch>
          {sections.map(section => (
            <Route key={section.path} path={`/${currentLanguage}/${section.path}`}>
              {formatTitle(t(section.title))}
              {renderSection(section.path)}
            </Route>
          ))}
          <Route path="/">
            <Redirect to={`/${currentLanguage}/${sections[0].path}/`} />
          </Route>
        </AnimatedSwitch>
      </Router>
    </HelmetProvider>
  )
}
