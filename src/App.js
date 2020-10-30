import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from './Menu'
import Previews from './Previews'
import Footer from './Footer'

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/interior-photo">
          <main><h1>Interior Photo</h1></main>
        </Route>
        <Route path="/contacts">
          <main><h1>Contacts</h1></main>
        </Route>
        <Route path="/">
          <Previews />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
