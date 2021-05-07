const defaultState={
  inputValue:'123',
  list:[1,2]
};

export default (state = defaultState, action)=>{
  if (action.type==="SET_INPUT_STATE") {
    const newState = state;
    newState.inputValue=action.value;
    return newState;
  }
  return state;
}
