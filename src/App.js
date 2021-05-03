import React, {useState} from 'react'
import { Input, Button, List } from 'antd';
import "antd/dist/antd.css";

function App() {
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState([])
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
    <List
      style={{width:'300px', marginTop:'10px'}}
      size="small"
      bordered
      dataSource={list}
      renderItem={(item,index)=><List.Item onClick={()=>{handDelete(index)}} >{item}</List.Item>}
    />
    </div>
  );
}

export default App;
