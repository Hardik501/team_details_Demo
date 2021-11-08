import axios from 'axios';
import {
    GET_TEAM,
} from './types';
import { USER_SERVER } from '../components/Config.js';

export function getTeamsDetails(){
    const request = axios.get(`${USER_SERVER}/getStaticData`)
    .then(response => response.data);

    return {
        type: GET_TEAM,
        payload: request
    }
}

