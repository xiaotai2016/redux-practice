import React, {useState,useEffect} from 'react'
import { Input, Button } from 'antd';
import Listcom from './list';
import store from "./store"

import "antd/dist/antd.css";

function App() {

  const [inputValue, setInputValue] = useState(store.getState().inputValue);
  const [list, setList] = useState(store.getState().list)
  const handleInput = (e)=>{
    console.log(1);

    const action={
      type:"SET_INPUT_STATE",
      value:e.target.value
    }
    store.dispatch(action);
  }
  const handListChange = ()=>{
    //setList([...list,inputValue])
    //setInputValue('')
    const action = {
      type:"UPDATE_LIST"
    }
    store.dispatch(action)
  }
  const handDelete= (index)=>{
    // var newlist = list;
    // newlist.splice(index,1)
    // setList([...newlist])
    const action = {
      type:"DELETE_ITEM",
      index:index
    }
    store.dispatch(action);
  }
  const handleStoreChange = ()=>{
    console.log(2,'changed');
    setInputValue(store.getState().inputValue);
    setList(store.getState().list)
  }

  useEffect(() => {
   store.subscribe(handleStoreChange);
 }, []);

  return (
    <div style={{marginLeft:'30px', marginTop:'30px'}}>
    <Input
      placeholder="Basic usage"
      value={inputValue}
      onChange= {handleInput}
      style={{width:'300px', marginRight:'10px'}}
    />
    <Button type="primary" onClick={handListChange}>Submit now</Button>
    <Listcom
      list={list}
      handDelete={handDelete}
     />
    </div>
  );
}

export default App;
