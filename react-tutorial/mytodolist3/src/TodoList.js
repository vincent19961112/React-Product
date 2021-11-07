import React ,{ Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

 constructor(props){
  super(props)
  this.state = {
   inputValue: '',
   list:[]
  }
  this.handleInputValueChange = this.handleInputValueChange.bind(this);
  this.handleBtnClick = this.handleBtnClick.bind(this);
  this.handleDeleteItem = this.handleDeleteItem.bind(this);
 }

 render(){
 return (
  <>
  <input value={this.state.inputValue} onChange={this.handleInputValueChange}/>
  <button onClick={this.handleBtnClick}>提交</button>
  <ul>
   {this.getTodoItem()}
  </ul>
  </>
  )
 }

 getTodoItem(){
  return (this.state.list.map((item,index)=>{
   return  <TodoItem key={index} content={item} deleteItem={this.handleDeleteItem}/>
  }))
 }

 handleInputValueChange(e){
  const value = e.target.value;
  this.setState({
   inputValue: value
  })
 }

 handleBtnClick(){
  this.setState((prevState)=>({
   list:[...prevState.list,prevState.inputValue],
   inputValue:''
  }))
 }

 handleDeleteItem(index){
  this.setState((prevState)=>{
   const list = prevState.list;
   list.splice(index,1);
   return {list}
  })
 }

}

export default TodoList