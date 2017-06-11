import { connect } from 'react-redux'
import FriendsList from '../components/FriendsList'
import { openConversation } from '../actions'

const mapStateToProps = (state) => ({
  friends: state.friends
});

const mapDispatchToProps = {
  onFriendClick: openConversation
};

const FriendsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsList);

export default FriendsListContainer
