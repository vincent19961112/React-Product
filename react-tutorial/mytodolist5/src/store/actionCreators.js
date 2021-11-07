import { ADD_ITEM, DELETE_ITEM, CHANGE_INPUT_VALUE } from './actionTypes';

export const getInputChangeAction = (value) =>({
  type: CHANGE_INPUT_VALUE,
  value: value
})

export const getAddItemAction = () =>({
  type: ADD_ITEM
})

export const getDeleteAction = (index) =>({
  type: DELETE_ITEM,
  index: index
})