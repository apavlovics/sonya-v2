import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import {useTranslation} from 'react-i18next'
import Contacts from './Contacts'
import Footer from './Footer'
import Menu from './Menu'
import Photo from './Photo'
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
    body: <Photo />,
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

        <Switch>
          {sections.map(section => (
            <Route key={section.path} path={`/${currentLanguage}/${section.path}`}>
              {formatTitle(t(section.title))}
              {section.body}
            </Route>
          ))}
          <Route path="/">
            <Redirect to={`/${currentLanguage}/${sections[0].path}/`} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </HelmetProvider>
  )
}

const formatTitle = title => {
  const fullTitle = title === '' ? 'Smart Casual' : `${title} | Smart Casual`
  return <Helmet><title>{fullTitle}</title></Helmet>
}
