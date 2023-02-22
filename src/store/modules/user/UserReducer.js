export default function UserReducer(state = { user: null, errors: null, loading: false}, action){
    switch(action.type){
        case 'LOGIN_REQUEST':
            return state = { user: null, errors: null, loading: true }
        case 'LOGIN_SUCCESS':
            return state = { user: action.payload, errors: null, loading: false}   
        case 'LOGIN_FAILURE':
            return state = { user: null, errors: action.payload, loading: false}  
        case 'LOGOUT':
            return state = { user: null, errors: null, loading: false}  
        default:
            return state
    }
}