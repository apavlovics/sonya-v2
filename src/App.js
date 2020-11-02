import Helmet from 'react-helmet'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Menu from './Menu'
import Previews from './Previews'
import Footer from './Footer'

const App = () => {
  return (
    <Router>
      {formatTitle('')}
      <Menu />

      <Switch>
        <Route path="/interior-design">
          {formatTitle('Interior Design')}
          <Previews />
        </Route>

        <Route path="/interior-photo">
          {formatTitle('Interior Photo')}
          <main><h1>Interior Photo</h1></main>
        </Route>

        <Route path="/contacts">
          {formatTitle('Contacts')}
          <main><h1>Contacts</h1></main>
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
