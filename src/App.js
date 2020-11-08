import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

// TODO Migrate to react-helmet-async once React 17 is supported
import Helmet from 'react-helmet'
import {useTranslation} from 'react-i18next'
import Menu from './Menu'
import Previews from './Previews'
import Footer from './Footer'

export default function App() {
  const [t, i18n] = useTranslation()

  // All website sections are defined below
  // TODO Move outside of App once t() is not called directly
  const sections = [{
    path: 'interior-design',
    title: 'Interior Design',
    body: <Previews />,
  }, {
    path: 'arhitectural-photo',
    title: 'Architectural Photo',
    body: <main><h1>{t('Architectural Photo')}</h1></main>,
  }, {
    path: 'contacts',
    title: 'Contacts',
    body: <main><h1>{t('Contacts')}</h1></main>,
  }]

  const currentLanguage = i18n.language
  return (
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
  )
}

const formatTitle = title => {
  const fullTitle = title === '' ? 'Smart Casual' : `${title} | Smart Casual`
  return <Helmet><title>{fullTitle}</title></Helmet>
}
