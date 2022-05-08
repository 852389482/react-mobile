import './App.scss'
import Layout from './pages/layout'
import Login from './pages/login'
// test
import Test from '@/pages/test'
// react router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Switch>
            {/* <Redirect exact from="/" to="/home"></Redirect> */}
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="home" />
              }}></Route>
            <Route path="/home" component={Layout}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/test" component={Test}></Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
