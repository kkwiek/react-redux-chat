import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Message from './Message'

class Conversation extends Component {
  state = {
    isOpen: true
  };

  componentDidMount () {
    this.scrollToBottom();
  }

  scrollToBottom () {
    const messagesContainer = ReactDOM.findDOMNode(this.messagesWrapper);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  toggleConversation (value) {
    this.setState({
      isOpen: !value,
    });
  }

  render() {
    const { friend, closeConversation } = this.props;

    return (
      <Paper
        zDepth={2}
        key={friend.uuid}
        className="conversation"
      >
        <div className="conversation-head clear">
          <div className="conversation-head-username">
            {friend.firstName} {friend.lastName}
          </div>
          <div className="conversation-head-options">
            <i className="material-icons pointer" onClick={() => this.toggleConversation(this.state.isOpen)}>
              remove
            </i>
            <i className="material-icons pointer" onClick={() => closeConversation(friend.uuid)}>
              close
            </i>
          </div>
        </div>
        <div className={classNames({"conversation-content": true, "hidden": !this.state.isOpen})}>
          <div className="conversation-messages-wrapper" ref={(el) => { this.messagesWrapper = el; }}>
            {friend.messages.map(message =>
              <Message
                friend={friend}
                message={message}
                key={message.key}
              />
            )}
          </div>
          <form className="conversation-message-area">
            <textarea
              title="message"
              placeholder="Message"
              className="message-area"
            />
          </form>
        </div>
      </Paper>
    )
  }
}

Conversation.propTypes = {
  friend: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      sender: PropTypes.string.isRequired,
      receiver: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }))
  }).isRequired,
  closeConversation: PropTypes.func.isRequired
};

export default Conversation;
