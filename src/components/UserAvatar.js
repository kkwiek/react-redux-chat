import React from 'react'
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types'
import { blue300, indigo900} from 'material-ui/styles/colors';

const getInitials = (firstName = '', lastName = '') => {
  return firstName.substring(0, 1) + lastName.substring(0, 1);
};

const UserAvatar = ({ firstName, lastName, style = {} }) => (
  <Avatar
    color={indigo900}
    backgroundColor={blue300}
    size={30}
    style={{...style, margin: 5}}
  >
    { getInitials(firstName, lastName) }
  </Avatar>
);

UserAvatar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default UserAvatar;
