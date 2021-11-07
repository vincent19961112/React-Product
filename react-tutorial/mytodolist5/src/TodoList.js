import React from 'react';
import { connect } from 'react-redux';
import { getInputChangeAction, getAddItemAction, getDeleteAction } from './store/actionCreators';

const TodoList = (props) =>{

 const { inputValue, handleClick, changeInputvalue , list, handleDelete } = props;

  return (
    <>
    <input value={inputValue} onChange={changeInputvalue}/>
    <button onClick={handleClick}>提交</button>
    <ul>
      {
        list.map((item,index)=>{
          return <li onClick={()=>{handleDelete(index)}} key={index}>{item}</li>
        })
      }
    </ul>
  </>
  );
}

const mapStateToProps = (state) =>{
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    changeInputvalue(e){
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    },
  
    handleClick(){
      const action = getAddItemAction();
      dispatch(action)
    },

    handleDelete(index){
      const action = getDeleteAction(index);
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
