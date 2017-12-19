import { combineReducers } from 'redux';
import {productReducer} from './productReducer';
import { Get_All_Items} from '../actions/actions';



const allReducer = combineReducers({productReducer:productReducer});

export default allReducer;
