import {SET_INPUT_STATE, UPDATE_LIST, DELETE_ITEM} from './actionType';

const defaultState={
  inputValue:'',
  list:[]
};

const mainreducer  = (state = defaultState, action)=>{
  if (action.type===SET_INPUT_STATE) {
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

export default  mainreducer
