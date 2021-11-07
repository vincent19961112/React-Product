import React, { Component } from 'react';

class TodoItem extends Component {

 constructor(props){
  super(props)
  this.handleDeleteItem = this.handleDeleteItem.bind(this);
 }

 render(){
  const {content} = this.props;
  return (
   <div onClick={this.handleDeleteItem}>{content}</div>
  )
 }

 handleDeleteItem(){
  const {deleteItem,index} = this.props;
  deleteItem(index)
 }

}

export default TodoItem