export const loginRequest = (user) => { return { type: 'LOGIN_REQUEST', payload: user } }
export const loginSuccess = (user) => { return { type: 'LOGIN_SUCCESS', payload: user } }
export const loginFailure = (error) => { return { type: 'LOGIN_FAILURE', payload: error } }
export const logout = { type: 'LOGOUT'} 
