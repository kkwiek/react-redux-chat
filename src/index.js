import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App'
import { getFriends } from './services/user'
import { setFriendsList } from './actions'

const store = createStore(reducer);

getFriends().then(friends => {
  store.dispatch(setFriendsList(friends))
});

injectTapEventPlugin();

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('chat-app')
);
