export default function ModalReducer(state = false, action){
    switch(action.type){
        case 'SHOW_MODAL':
            return state = true
        case 'HIDE_MODAL':
            return state = false    
        default:
            return state  
    }
}