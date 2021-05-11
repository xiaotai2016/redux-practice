import{ SET_INPUT_STATE, UPDATE_LIST, DELETE_ITEM } from "./actionType";
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
  axios
    .get('https://resumakeback.gotogermany.in/redux')
    .then((res)=>{console.log(res)})
}
