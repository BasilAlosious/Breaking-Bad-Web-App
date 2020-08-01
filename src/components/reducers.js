import{SET_SEARCH_FIELD} from './constants'

const initialState = {
    query:''
}

export const SearchItems = (state=initialState, action={}) =>{
    switch(action.type){
        case SET_SEARCH_FIELD: 
        return Object.assign({},state,{query:action.payload})
        default: 
        return state
    }
}
