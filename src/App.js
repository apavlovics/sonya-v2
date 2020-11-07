import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

// TODO Migrate to react-helmet-async once React 17 is supported
import Helmet from 'react-helmet'
import {useTranslation} from 'react-i18next'
import Menu from './Menu'
import Previews from './Previews'
import Footer from './Footer'

const App = () => {
  const [t] = useTranslation()
  return (
    <Router>
      {formatTitle('')}
      <Menu />

      <Switch>
        <Route path="/interior-design">
          {formatTitle(t('Interior Design'))}
          <Previews />
        </Route>

        <Route path="/interior-photo">
          {formatTitle(t('Architectural Photo'))}
          <main><h1>{t('Architectural Photo')}</h1></main>
        </Route>

        <Route path="/contacts">
          {formatTitle(t('Contacts'))}
          <main><h1>{t('Contacts')}</h1></main>
        </Route>

        <Route path="/">
          <Redirect to="/interior-design/" />
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

export default App
