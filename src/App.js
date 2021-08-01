import {useState} from 'react'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import {useTranslation} from 'react-i18next'
import AnimatedSwitch from './AnimatedSwitch'
import Contact from './Contact'
import Menu from './Menu'
import PageNotFound from './PageNotFound'
import Previews from './Previews'
import {formatTitle} from './Utilities'

export default function App() {
  const i18n = useTranslation()[1]
  const [menuHidden, setMenuHidden] = useState(false)

  // All website sections are defined below
  const sections = [{
    path: 'interior-design',
    title: 'Interior Design',
    exact: false,
  }, {
    path: 'contact',
    title: 'Contact',
    exact: true,
  }]

  const renderSection = sectionPath => {
    switch(sectionPath) {
      case 'interior-design': return <Previews setMenuHidden={setMenuHidden} />
      case 'contact':         return <Contact />
      default:                throw new Error(`Unexpected section path: ${sectionPath}`)
    }
  }

  const currentLanguage = i18n.language
  return (
    <HelmetProvider>
      <Router>
        {formatTitle('')}
        <Menu sections={sections} hidden={menuHidden} />

        <AnimatedSwitch>
          <Route exact path="/">
            <Redirect to={`/${currentLanguage}/${sections[0].path}/`} />
          </Route>
          <Route exact path={`/${currentLanguage}`}>
            <Redirect to={`/${currentLanguage}/${sections[0].path}/`} />
          </Route>
          {sections.map(section => (
            <Route key={section.path} exact={section.exact} path={`/${currentLanguage}/${section.path}`}>
              {renderSection(section.path)}
            </Route>
          ))}
          <Route path="*">
            <PageNotFound />
          </Route>
        </AnimatedSwitch>
      </Router>
    </HelmetProvider>
  )
}
