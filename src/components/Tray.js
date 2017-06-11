import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import ChatSvgIcon from 'material-ui/svg-icons/communication/chat-bubble';
import MenuItem from 'material-ui/MenuItem';
import classNames from 'classnames'

class Tray extends Component {
  state = {
    openMenu: false
  };

  handleOnRequestChange = (value) => {
    this.setState({
      openMenu: value,
    });
  };

  render() {
    const { friends, moveConversationToBeginning } = this.props;

    return (
      <div id="tray" className={classNames({"hidden": friends.length === 0})}>
        <IconMenu
          iconButtonElement={<IconButton><ChatSvgIcon /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
          open={this.state.openMenu}
          onRequestChange={this.handleOnRequestChange}
        >
          {friends.map(friend =>
            <MenuItem
              key={friend.uuid}
              value={friend.uuid}
              primaryText={friend.firstName + ' ' + friend.lastName}
              onClick={() => moveConversationToBeginning(friend.uuid)}
            />
          )}
        </IconMenu>
      </div>
    );
  }
}

Tray.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  })),
  moveConversationToBeginning: PropTypes.func.isRequired
};

export default Tray;
