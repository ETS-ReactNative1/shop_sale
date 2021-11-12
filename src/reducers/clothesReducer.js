import { GET_CLOTHES } from "actions/const";

const initialState = {
    list: [],
    item: ''
}

const clothesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLOTHES:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}

export default clothesReducer;