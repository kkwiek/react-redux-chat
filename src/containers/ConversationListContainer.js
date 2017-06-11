import { connect } from 'react-redux'
import ConversationList from '../components/ConversationList'
import { closeConversation, moveConversationToBeginning } from '../actions'

const getConversations = (state) => {
  return state.conversation.map(conversation => {
    conversation = state.friends.find(friend => friend.uuid === conversation);
    conversation.messages = conversation.messages.map(message => {
      message['key'] = Math.random().toString(36);
      return message;
    });

    return conversation;
  });
};

const mapStateToProps = (state) => {
  let conversations = getConversations(state);
  return { conversations }
};

const mapDispatchToProps = {
  closeConversation,
  moveConversationToBeginning
};

const ConversationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList);

export default ConversationListContainer
