import React, {useState,useEffect} from 'react'
import ListUI from './AppUI';
import store from "./store";
import { handInputAction, handleListChangeAction, handleDeleteAction} from "./store/createAction"

import "antd/dist/antd.css";

function App() {

  const [inputValue, setInputValue] = useState(store.getState().inputValue);
  const [list, setList] = useState(store.getState().list)
  const handleInput = (e)=>{
    const action= handInputAction(e.target.value)
    store.dispatch(action);
  }
  const handListChange = ()=>{
    const action = handleListChangeAction();
    store.dispatch(action)
  }
  const handDelete= (index)=>{
    const action = handleDeleteAction(index)
    store.dispatch(action);
  }
  const handleStoreChange = ()=>{
    setInputValue(store.getState().inputValue);
    setList([...store.getState().list])
  }

  useEffect(() => {
   store.subscribe(handleStoreChange);
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

export default App;
