export const setFriendsList = (friends) => ({
  type: 'SET_FRIENDS_LIST',
  friends
});

export const addFriend = (friend) => ({
  type: 'ADD_FRIEND',
  friend
});

export const removeFriend = (uuid) => ({
  type: 'REMOVE_FRIEND',
  uuid
});

export const openConversation = (uuid) => ({
  type: 'OPEN_CONVERSATION',
  uuid
});

export const closeConversation = (uuid) => ({
  type: 'CLOSE_CONVERSATION',
  uuid
});

export const moveConversationToBeginning = (uuid) => ({
  type: 'MOVE_CONVERSATION_TO_BEGINNING',
  uuid
});
