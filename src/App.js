import React, {useState,useEffect} from 'react'
import ListUI from './AppUI';
import store from "./store";
import { handInputAction, handleListChangeAction, handleDeleteAction,ajaxGetListAction} from "./store/createAction"
import {connect} from 'react-redux';

import "antd/dist/antd.css";

function App({inputValue, handleInput, handListChange,list, handDelete, handleAjax}) {
  
  useEffect(() => {
    handleAjax()
 }, []);

  return (
    <ListUI
      inputValue={inputValue}
      handleInput={handleInput}
      handListChange={handListChange}
      list={list}
      handDelete={handDelete}
    />
  );
}

const mapStateToProps = (state) => {
  return{
  inputValue:state.inputValue,
  list:state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
  handleInput: (e) => dispatch(handInputAction(e.target.value)),
  handListChange: () => dispatch(handleListChangeAction()),
  handDelete: (index) => dispatch(handleDeleteAction(index)),
  handleAjax: () => dispatch(ajaxGetListAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
