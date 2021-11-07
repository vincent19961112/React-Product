import React, { Component } from 'react'
import propTypes from 'prop-types';

class TodoItem extends Component {
 
 constructor(props){
  super(props);
  this.handleClick = this.handleClick.bind(this)
 }

 render(){
  console.log('child render')
  const { content } = this.props;
  return <div onClick={this.handleClick}>{content}</div>
 }

   // 組件被更新之前，自動執行
 shouldComponentUpdate(nextProps, nextState){
  if(nextProps.content !== this.props.content){
    return true;
  }else{
    return false;
  }
 }

 // 一個組件要從父組件接收參數
 // 如果這個組件第一次存在於父組件中，不會執行
 // 如果這個組件之前已經存在於父組件中，才會執行
 // componentWillReceiveProps(){
 //  console.log('child componentWillReceiveProps')
 // }

 handleClick(){
  const { deleteItem, index } = this.props;
  deleteItem(index)
  // alert(this.props.index)
 }

 // 當這個組件要被去除的時候自動執行
 // componentWillUnmount(){
 //  console.log('child componentWillUnmount')
 // }

}

TodoItem.propTypes ={
 content:propTypes.oneOfType([propTypes.number,propTypes.string]),
 handleClick:propTypes.func,
 index:propTypes.number,
}


export default TodoItem