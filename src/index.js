import React from "react";
import ReactDOM from "react-dom";
import "./assets/medium.css";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import App from "./App.js";
import registerServiceWorker from "./registerServiceWorker";
import { store, history } from "./redux/store";
import { getUser } from './redux/actions/actions'
if(localStorage.Auth) {
  //update local storage
  store.dispatch({ type: "SET_USER", user: JSON.parse(localStorage.Auth) });
  var _id = JSON.parse(localStorage.Auth)._id;
  getUser(_id).then((res) => {
    store.dispatch({ type: "SET_USER", user: res });
  })
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

/** we imported our store from ./redux/store file and passed it as prop to the Provider componnent. Note, our App component which contains our entire components is a child of the Provider component. The Provider component passes the store down to its children through their contexts.
 *
 */
