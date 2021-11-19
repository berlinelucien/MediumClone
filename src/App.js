import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Feed from './components/Feed'
import Profile from './components/Profile'
import ArticleView from './components/ArticleView'
import requireAuthentication from './utils/requireAuth';
import Editor from './components/Editior'
import SignInWith from './components/SignInWith'
class App extends Component {
  render() {
    const pathname = window.location.pathname
    return (
      /**If none matches the path with the prop "**" is activated. */
      <div>
        {!pathname.includes("editor") ? <Header /> : ""}
        <SignInWith />
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/articleview/:id" component={ArticleView} />
          <Route path="/editor" component={requireAuthentication(Editor)} />
          <Route path="**" component={Feed} />
        </Switch>
      </div>
    );
  }
}
export default App;