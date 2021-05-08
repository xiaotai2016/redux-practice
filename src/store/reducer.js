import {SET_INPUT_STATE, UPDATE_LIST, DELETE_ITEM} from './actionType';

const defaultState={
  inputValue:'',
  list:[]
};

export default (state = defaultState, action)=>{
  if (action.type===SET_INPUT_STATE) {
    console.log(3);
    const newState = state;
    newState.inputValue=action.value;
    return newState;
  }
  if (action.type===UPDATE_LIST) {
    const newState = state;
    newState.list = [...state.list, state.inputValue];
    newState.inputValue = '';
    return newState;
  }
  if (action.type===DELETE_ITEM) {
    const newState = state;
    newState.list.splice(action.index,1);
    return newState;
  }
  return state;
}
