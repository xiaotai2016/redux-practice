import{ SET_INPUT_STATE, UPDATE_LIST, DELETE_ITEM, UPDATE_AJAX_LISR, GET_AJAX_LIST } from "./actionType";

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

export const ajaxGetListAction = ()=>({
  type: GET_AJAX_LIST
})

export const showAjaxListAction = (data)=>({
  type: UPDATE_AJAX_LISR,
  data
})
