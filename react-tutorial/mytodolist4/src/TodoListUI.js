import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) =>{
  return (
 <>
   <div style={{marginTop:'10px',marginLeft:'10px'}}>
   <Input 
   value={props.inputValue} 
   onChange={props.handleInputChange}
   placeholder='todo info' style={{width:'300px',marginRight:'10px'}}/>
   <Button onClick={props.handleBtnClick} type="primary">提交</Button>
  </div>
  <List
  style={{marginTop:'10px',marginLeft:'10px',width:'300px'}}
  bordered
  dataSource={props.list}
  renderItem={(item,index)=> <List.Item onClick={()=>props.handleClickDelete(index)}>{item}</List.Item>} 
  />
  </>
  )
}

export default TodoListUI 