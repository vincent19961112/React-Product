import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as HomeReducer } from '../pages/home/store';
//redux-immutable

const reducer =  combineReducers({
 header: headerReducer,
 Home: HomeReducer
});

export default reducer
