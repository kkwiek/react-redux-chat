import React from 'react'
import PropTypes from 'prop-types'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Paper from 'material-ui/Paper';
import UserAvatar from './UserAvatar'
import {List, ListItem} from 'material-ui/List';

const FriendsList = ({ friends, onFriendClick }) => (
  <Paper id="friends-list" zDepth={2}>
    <List>
      {friends.map(friend =>       	
        <ListItem
          key={friend.uuid}
          primaryText={friend.firstName + ' ' + friend.lastName}
          leftAvatar={
            <UserAvatar firstName={friend.firstName} lastName={friend.lastName} />
          }
          rightIcon={<CommunicationChatBubble />}
          onClick={() => {
            onFriendClick(friend.uuid)
          }}
        />
      )}
    </List>
  </Paper>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onFriendClick: PropTypes.func.isRequired
};

export default FriendsList
