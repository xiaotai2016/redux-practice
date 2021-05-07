const defaultState={
  inputValue:'',
  list:[]
};

export default (state = defaultState, action)=>{
  if (action.type==="SET_INPUT_STATE") {
    console.log(3);
    const newState = state;
    newState.inputValue=action.value;
    return newState;
  }
  return state;
}
