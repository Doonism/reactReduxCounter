export function counterReducer(state, action) {
  switch(action.type){
    case 'INCREMENT':
        state.counter++;
        return {
          ...state
        }
    case 'DECREMENT':
      state.counter--;
      return {
        ...state
      }
    case 'RESET':
      state.counter = 0;
      return {
        ...state
      }
    default:
      return state;
  }
}

export default counterReducer;
