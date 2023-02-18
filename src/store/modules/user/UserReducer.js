export default function UserReducer(state = { user: null, errors: null}, action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return state = { user: action.payload, errors: null}   
        case 'LOGIN_FAILURE':
            return state = { user: null, errors: action.payload}  
        case 'LOGOUT':
            return state = { user: null, errors: null}  
        default:
            return state
    }
}