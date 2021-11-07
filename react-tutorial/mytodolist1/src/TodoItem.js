import React, { Component } from 'react'

class TodoItem extends Component {

 constructor(props){
  super(props)
  this.handleClick = this.handleClick.bind(this);
 }

 shouldComponentUpdate(prevState){
  if(prevState.list!== this.props.list){
   return true
  }else{
   return false
  }
 }

 render(){
  console.log('child')
  const {content} = this.props;
  return <div onClick={this.handleClick}>{content}</div>
  
 }

 handleClick(){
  const { deleteItem, index } = this.props;
  deleteItem(index)
 }

}

export default TodoItem