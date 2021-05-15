import {SET_INPUT_STATE, UPDATE_LIST, DELETE_ITEM, UPDATE_AJAX_LISR} from './actionType';

const defaultState={
  inputValue:'',
  list:[]
};

const mainreducer  = (state = defaultState, action)=>{
  if (action.type===SET_INPUT_STATE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue=action.value;
    return newState;
  }
  if (action.type===UPDATE_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = [...state.list, state.inputValue];
    newState.inputValue = '';
    return newState;
  }
  if (action.type===DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1);
    return newState;
  }
  if (action.type===UPDATE_AJAX_LISR) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list=action.data;
    return newState;
  }
  return state;
}

export default  mainreducer
