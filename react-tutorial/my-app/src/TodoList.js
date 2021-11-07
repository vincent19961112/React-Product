import React, { Component } from 'react'
import TodoItem from './TodoItem';


class TodoList extends Component {

 constructor(props){
  super(props);
  this.state = {
   inputValue: '',
   list:[]
  }
  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleBtnClick = this.handleBtnClick.bind(this);
  this.handleItemDelete = this.handleItemDelete.bind(this);
 }

 // 在組件即將被掛載到頁面的時候自動執行
//  componentWillMount(){
//   console.log('componentWillMount')
//  }

 render(){
   console.log('render')
  return (
   <>
   <div>
    <input 
    value={this.state.inputValue}
    onChange={this.handleInputChange}
    />
    <button onClick={this.handleBtnClick}>提交</button>
    </div>
   <ul>
    {this.getTodoItem()}
   </ul>
   </>
  )
 }

 componentDidMount(){
 
 }

 // 組件被掛載到頁面之後自動執行
//  componentDidMount(){
//    console.log('componentDidMount')
//  }

 // 組件被更新之前，自動執行
//  shouldComponentUpdate(){
//   console.log('shouldComponentUpdate')
//  }

 // 組件被更新之前，自動執行但是在shouldComponentUpdate之後被執行
 //如果shoudComponentUpdate返回true則會執行
 //如果shouldComponentUpdate返回false則部會執行
//  componentWillUpdate(){
//    console.log('componentWillUpdate')
//  }

//  componentDidUpdate(){
//    console.log('componentDidUpdate')
//  }

 getTodoItem(){
   return this.state.list.map((item,index)=>{
      return (
        <TodoItem 
        key={item}
        content={item} 
        index={index}
        deleteItem={this.handleItemDelete}
        />
      )
     })
 }

 handleInputChange(e){
 const value = e.target.value;
 this.setState(() => ({
     inputValue: value
 }))
 }

 handleBtnClick(){
  this.setState((prevState) => ({
    list:[...prevState.list,prevState.inputValue],
    inputValue:''
  }))
 }

 handleItemDelete(index){
  this.setState((prevState) => {
    const list = [...prevState.list]
    list.splice(index,1)
    return {list}
  })
 }

}

export default TodoList