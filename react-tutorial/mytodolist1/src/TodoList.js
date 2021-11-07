import React, { Component } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios';

class TodoList extends Component {

 constructor(props){
  super(props)
  this.state = {
   inputValue:'',
   list:[],
   next30: 0
  }
  this.handleInputChange = this.handleInputChange.bind(this)
  this.handleDelete = this.handleDelete.bind(this)
  this.handleBtnClick = this.handleBtnClick.bind(this)
 }

 render(){
  return (
  <>
   <input
   value={this.state.inputValue}
   onChange={this.handleInputChange}
   />
   <button
   onClick={this.handleBtnClick}
   >提交</button>
   <ul>{this.getTodoItem()}</ul>
  </>
  )
 }
 getTodoItem(){
 return this.state.list.map((item,index)=>{
   return (
    <TodoItem
    key={index}
    content={item}
    index={index}
    deleteItem={this.handleDelete}
    />
   )
  })
 }

 handleInputChange(e){
  let value = e.target.value
  this.setState(()=>({
   inputValue:value
  }))
 }

 handleBtnClick(){
  let add = 30;
  axios.get(`http://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=${30 + this.state.next30}&$format=JSON`).then((res)=>{
   console.log(res)
  })
  this.setState((prevState)=>({
   list:[...prevState.list,prevState.inputValue],
   inputValue: '',
   next30: prevState.next30 + add
  }))
 }

 handleDelete(index){
  this.setState((prevState)=>{
   const list = [...prevState.list]
   list.splice(index,1)
   return {list}
  })
 }

}

export default TodoList