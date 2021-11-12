import { GET_CLOTHES } from "./const"
import axios from 'axios'

export function getClothes () {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            dispatch({
                type: GET_CLOTHES,
                payload: res.data
            })
        })
    }
}
