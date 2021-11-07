import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends　Component {

 render(){
  return (
   <>
   <div style={{marginTop:'10px',marginLeft:'10px'}}>
   <Input 
   value={this.props.inputValue} 
   onChange={this.props.handleInputChange}
   placeholder='todo info' style={{width:'300px',marginRight:'10px'}}/>
   <Button onClick={this.props.handleBtnClick} type="primary">提交</Button>
  </div>
  <List
  style={{marginTop:'10px',marginLeft:'10px',width:'300px'}}
  bordered
  dataSource={this.props.list}
  renderItem={(item,index)=> <List.Item onClick={()=>this.props.handleClickDelete(index)}>{item}</List.Item>} 
  />
  </>
  )
 }
}

export default TodoListUI 