import { combineReducers } from 'redux'
import friends from './friends'
import conversation from './conversation'

const chatApp = combineReducers({
  friends,
  conversation
});

export default chatApp
