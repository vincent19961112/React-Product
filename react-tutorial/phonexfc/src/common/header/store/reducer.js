import * as ActionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
 focused: false,
 mouseIn: false,
 list: [],
 page: 1,
 totalPage: 1
})

//immutable對象的set方法，會結合之前immuyable對象的值
//和設置的值，返回一個全新的對象

const reducer = (state=defaultState,action) =>{
 switch(action.type) {
  case ActionTypes.SEARCH_FOCUS:
   return state.set('focused', true);
  case ActionTypes.SEARCH_BLUR:
   return state.set('focused', false);
  case ActionTypes.CHANGE_LIST:
    return state.merge({
      list: action.data,
      totalPage: action.totalPage
    })
   case ActionTypes.MOUSEENTER:
    return state.set('mouseIn', true);
   case ActionTypes.MOUSELEAVE:
    return state.set('mouseIn', false);
   case ActionTypes.CHANGE_PAGE:
    return state.set('page', action.page)
  default:
  return state
 }
}

export default reducer
