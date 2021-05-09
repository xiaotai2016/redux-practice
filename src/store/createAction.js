import{ SET_INPUT_STATE, UPDATE_LIST, DELETE_ITEM } from "./actionType";

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
