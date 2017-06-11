const conversation = (state = [], action) => {
  switch (action.type) {
    case 'OPEN_CONVERSATION':
      let isOpen = state.some(conversation => conversation === action.uuid);
      if (isOpen) {
        return [...state];
      }

      return [action.uuid, ...state];
    case 'CLOSE_CONVERSATION':
      return state.filter(conversation => conversation !== action.uuid);
    case 'MOVE_CONVERSATION_TO_BEGINNING':
      let index = state.indexOf(action.uuid);
      if (index === -1) {
        return [...state];
      }

      let element = state[index];
      state.splice(index, 1);

      return [element, ...state];
    default:
      return [...state];
  }
};

export default conversation
