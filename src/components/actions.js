import {SET_SEARCH_FIELD,REQUEST_ITEMS_PENDING,REQUEST_ITEMS_SUCCESS,REQUEST_ITEMS_FAILED} from './constants'

export const setSearchField=(text)=>({
    type: SET_SEARCH_FIELD ,
    payload:text
}
)
 export const requestItems= () => (dispatch) => {
    dispatch({type:REQUEST_ITEMS_PENDING})
    fetch(`https://www.breakingbadapi.com/api/characters/`)
    .then(response=> response.json())
    .then(items => dispatch({type:REQUEST_ITEMS_SUCCESS,payload:items}))
    .catch(error=>dispatch({type:REQUEST_ITEMS_FAILED,payload:error}))
}
