import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Conversation from './Conversation'
import Tray from "./Tray";

let conversationWidth = 310;
let friendsWidth = 360;
let trayWidth = 50;

const getActiveConversationsLimit = () => {
  let width = window.innerWidth || document.body.clientWidth;
  return Math.floor((width - friendsWidth - trayWidth) / conversationWidth) || 1;
};

class ConversationList extends Component {

  resize = () => {
    this.forceUpdate();
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  render () {
    const { conversations, closeConversation, moveConversationToBeginning } = this.props;

    let active = conversations.slice(0, getActiveConversationsLimit());
    let tray = conversations.slice(getActiveConversationsLimit());

    return (
      <div id="conversations-container">
        <Tray friends={tray} moveConversationToBeginning={ moveConversationToBeginning }/>
        <div id="conversations-lists">
          {active.reverse().map(friend =>
            <Conversation
              key={friend.uuid}
              friend={friend}
              closeConversation={closeConversation}
            />
          )}
        </div>
      </div>
    )
  }
}

ConversationList.propTypes = {
  conversations: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
      sender: PropTypes.string.isRequired,
      receiver: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }))
  })),
  closeConversation: PropTypes.func.isRequired,
  moveConversationToBeginning: PropTypes.func.isRequired
};

export default ConversationList
