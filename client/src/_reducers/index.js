import { combineReducers } from 'redux';
import teams from './team_reducer';

const rootReducer = combineReducers({
    teams,
});

export default rootReducer;
