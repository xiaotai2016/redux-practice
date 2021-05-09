import React from 'react'
import { Input, Button, List } from 'antd';

function Listcom(props) {
  return(
    <div style={{marginLeft:'30px', marginTop:'30px'}}>
    <Input
      placeholder="Basic usage"
      value={props.inputValue}
      onChange= {(e)=>{props.handleInput(e)}}
      style={{width:'300px', marginRight:'10px'}}
    />
    <Button type="primary" onClick={props.handListChange}>Submit now</Button>
    <List
    style={{width:'300px', marginTop:'10px'}}
    size="small"
    bordered
    dataSource={props.list}
    renderItem={(item,index)=><List.Item onClick={()=>{props.handDelete(index)}} >{item}</List.Item>}
    />
    </div>
  )
}

export default Listcom
