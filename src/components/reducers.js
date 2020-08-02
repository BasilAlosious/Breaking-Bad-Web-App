import{SET_SEARCH_FIELD,REQUEST_ITEMS_PENDING,REQUEST_ITEMS_SUCCESS,REQUEST_ITEMS_FAILED} from './constants'

const initialState = {
    query:'',
}

export const SearchItems = (state=initialState, action={}) =>{
    switch(action.type){
        case SET_SEARCH_FIELD: 
        return Object.assign({},state,{query:action.payload})
        default: 
        return state
    }
}
const initialStateItems={
    isPending: false,
    items:[],
    error:''
}
export const requestItems =(state=initialStateItems,action={})=>{
    switch(action.type){
        case REQUEST_ITEMS_PENDING:
            return Object.assign({},state,{isPending:true})
        case REQUEST_ITEMS_SUCCESS:
            return Object.assign({},state,{items:action.payload,isPending:false})
        case REQUEST_ITEMS_FAILED:
            return Object.assign({},state,{error:action.payload,isPending:false})
        default: 
        return state        
    }
}
