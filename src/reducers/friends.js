const friends = (state = [], action) => {
  switch (action.type) {
    case 'SET_FRIENDS_LIST':
      return [
        ...action.friends
      ];
    case 'ADD_FRIEND':
      return [
        ...state,
        {
          uuid: action.uuid,
          firstName: action.firstName,
          lastName: action.lastName,
          messages: []
        }
      ];
    case 'REMOVE_FRIEND':
      return state.filter(friend => friend.uuid !== action.uuid);
    default:
      return state
  }
};

export default friends
