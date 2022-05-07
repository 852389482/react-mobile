import './App.scss'
import Layout from './pages/layout'
import Login from './pages/login'
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/home" component={Layout}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
