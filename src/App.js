import React, {useState} from 'react'
import { Input, Button } from 'antd';
import Listcom from './list';
import store from "./store"

import "antd/dist/antd.css";

function App() {
  const stateDate = store.getState();
  const [inputValue, setInputValue] = useState(stateDate.inputValue);
  const [list, setList] = useState(stateDate.list)
  const handleInput = (e)=>{
    setInputValue (e.target.value);
  }
  const handListChange = ()=>{
    setList([...list,inputValue])
    setInputValue('')
  }
  const handDelete= (index)=>{
    var newlist = list;
    newlist.splice(index,1)
    setList([...newlist])
  }
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
