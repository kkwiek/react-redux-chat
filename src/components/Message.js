import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import UserAvatar from './UserAvatar'
import { getMe } from '../services/user'

let me = getMe();

const isReceiver = (message) => message.sender === me.uuid;

const getMessageSender = (message, friend) => {
  if (message.sender === friend.uuid) {
    return friend;
  }

  return me;
};

const Message = ({ message, friend }) => {
  let messageSender = getMessageSender(message, friend);

  return (
    <div className={classNames({'conversation-message': true, 'conversation-message-right': isReceiver(message)})}>
      <div className="conversation-message-photo">
        <UserAvatar firstName={messageSender.firstName} lastName={messageSender.lastName} />
      </div>
      <div className="conversation-message-content" title={message.date}>
        <div className="conversation-message-date">{message.date}</div>
        { message.text }
      </div>
    </div>
  )
};

Message.propTypes = {
  message: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    receiver: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  friend: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  })
};

export default Message;
