import{ SET_INPUT_STATE, UPDATE_LIST, DELETE_ITEM, UPDATE_AJAX_LISR } from "./actionType";
import axios from "axios";

export const handInputAction = (value)=>({
  type:SET_INPUT_STATE,
  value
})

export const handleListChangeAction = ()=>({
  type:UPDATE_LIST
})

export const handleDeleteAction = (index)=>({
  type:DELETE_ITEM,
  index
})

export const ajaxGetListAction = ()=>{
  return (dispatch)=>{
    axios
      .get('https://resumakeback.gotogermany.in/redux')
      .then((res)=>{
        const ajaxList= res.data;
        const action = {
          type:UPDATE_AJAX_LISR,
          data:ajaxList
        }
        dispatch(action)
      })
  }
}
