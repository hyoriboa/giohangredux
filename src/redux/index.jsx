import {combineReducers} from 'redux'

import storeGioHangReducer from './reducer/GioHangReducer';

const rootReducer = combineReducers({
    storeGioHangReducer,
});

export default rootReducer;