export default function TransitionReducer(state = { transitions: [], loading: false }, action){
    switch(action.type){
        case 'GET_TRANSITIONS':
            return state = { transitions: action.payload, loading: false }
        case 'ADD_TRANSTION_REQUEST':  
            return state = { transitions: [...state.transitions], loading: true}  
        case 'ADD_TRANSITION_SUCCESS':
            return { transitions: [...state.transitions, action.payload], loading: false}
        case 'ADD_TRANSITION_FAILURE':
            return state    
        case 'DELETE_TRANSITION_REQUEST':
            return state = { transitions: [...state.transitions], loading: true}
        case 'DELETE_TRANSITION':
            return state = { transitions: state.transitions.filter(transition =>{
                return transition._id !== action.payload
            }), loading: false}   
        default: 
            return state   
    }
}