import { fromJS } from 'immutable';

const defaultState = fromJS({
   topicList: [],
   articleList: [],
})

//immutable對象的set方法，會結合之前immuyable對象的值
//和設置的值，返回一個全新的對象

const reducer = (state=defaultState,action) =>{
 switch(action.type) {
  default:
  return state
 }
}

export default reducer
