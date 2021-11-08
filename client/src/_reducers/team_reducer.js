import {
    GET_TEAM
} from '../_actions/types';


export default function(state={},action){
    switch(action.type){
        case GET_TEAM:
            return {...state, team: action.payload }
        default:
            return state;
    }
}
