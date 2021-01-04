import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import {useTranslation} from 'react-i18next'
import AnimatedSwitch from './AnimatedSwitch'
import ArchitecturalPhoto from './ArchitecturalPhoto'
import Contacts from './Contacts'
import Menu from './Menu'
import Previews from './Previews'

export default function App() {
  const [t, i18n] = useTranslation()

  // All website sections are defined below
  const sections = [{
    path: 'interior-design',
    title: 'Interior Design',
    body: <Previews />,
  }, {
    path: 'arhitectural-photo',
    title: 'Architectural Photo',
    body: <ArchitecturalPhoto />,
  }, {
    path: 'contacts',
    title: 'Contacts',
    body: <Contacts />,
  }]

  const currentLanguage = i18n.language
  return (
    <HelmetProvider>
      <Router>
        {formatTitle('')}
        <Menu sections={sections} />

        <AnimatedSwitch>
          {sections.map(section => (
            <Route key={section.path} path={`/${currentLanguage}/${section.path}`}>
              {formatTitle(t(section.title))}
              {/* There must be one root element for AnimatedSwitch to work correctly */}
              <div>
                {section.body}
              </div>
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

const formatTitle = title => {
  const fullTitle = title === '' ? 'Smart Casual' : `${title} | Smart Casual`
  return <Helmet><title>{fullTitle}</title></Helmet>
}
