export const getTransitionsRequest = { type: 'GET_TRANSITIONS_REQUEST' }
export const getTransitionsSuccess = (transtions) => { return { type: 'GET_TRANSITIONS', payload: transtions } }

export const addTransitionRequest = (transition) => { return { type: 'ADD_TRANSITION_REQUEST', payload: transition } }
export const addTransitionSuccess = (transition) => { return { type: 'ADD_TRANSITION_SUCCESS', payload: transition } }
export const addTransitionFailure = (error) => { return { type: 'ADD_TRANSITION_FAILURE', payload: error } }

export const deleteTransitionRequest = (id) => { return { type: 'DELETE_TRANSITION_REQUEST', payload: id } }
export const deleteTransitionSuccess = (msg) => { return { type: 'DELETE_TRANSITION', payload: msg } }
