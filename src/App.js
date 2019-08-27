import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import React, { Component } from 'react'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import SingleRecipe from './pages/SingleRecipe'
import Default from './pages/Default'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipes} />
            <Route path="/recipes/:id" component={SingleRecipe} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    )
  }
}
