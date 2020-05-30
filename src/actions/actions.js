import {SET_ALL} from '../reducers/identifiers'
import axios from 'axios'

const API_URL = 'localhost:8082';


export const setAllAction = (data) => {
    return {
        type: SET_ALL,
        data
    }
};

export const asyncSetAllAction = () => {
    return (dispatch) => {
        const url = `${API_URL}/sendData/`;
        axios.get(url)
            .then((response) => {
                dispatch(setAllAction(response.data.list))
            })
            .catch((err) => {

            })
    }
};


