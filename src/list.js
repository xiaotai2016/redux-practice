import React from 'react'
import { List } from 'antd';
import "antd/dist/antd.css";

function Listcom(props) {
  const handDelete=props.handDelete
  return(
    <List
    style={{width:'300px', marginTop:'10px'}}
    size="small"
    bordered
    dataSource={props.list}
    renderItem={(item,index)=><List.Item onClick={()=>{handDelete(index)}} >{item}</List.Item>}
    />
  )
}

export default Listcom
