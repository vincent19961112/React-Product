import * as ActionTypes from './actionTypes';
import { List } from 'immutable';
import axios from 'axios';

const changeList = (data) =>({
  type: ActionTypes.CHANGE_LIST,
  data: List(data),
  totalPage: Math.ceil(data.length/30)
})

export const searchFocus = () =>({
  type: ActionTypes.SEARCH_FOCUS
});

export const searchBlur = () =>({
  type: ActionTypes.SEARCH_BLUR
})

export const mouseEnter = () =>({
  type: ActionTypes.MOUSEENTER
})

export const mouseLeave = () =>({
  type: ActionTypes.MOUSELEAVE
})

export const changePage = (page) =>({
  type: ActionTypes.CHANGE_PAGE,
  page
})

export const getList = () =>{
  return (dispatch) =>{
    axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$format=JSON').then((res)=>{
    const action = changeList(res.data)
    dispatch(action);
    }).catch(()=>{
      console.log('error');
    })
  }
}