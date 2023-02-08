export default function TransitionReducer(state = [], action){
    switch(action.type){
        case 'GET_TRANSITIONS':
            return state = action.payload
        case 'ADD_TRANSITION_SUCCESS':
            return [...state, action.payload]
        case 'ADD_TRANSITION_FAILURE':
            return state    
        case 'DELETE_TRANSITION':
            return state = state.filter(transition =>{
                return transition._id !== action.payload
            })   
        default: 
            return state   
    }
}