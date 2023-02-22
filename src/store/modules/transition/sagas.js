import { toast } from 'react-toastify'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import api from '../../../services/api'
import { addTransitionSuccess, addTransitionFailure, getTransitionsSuccess, deleteTransitionSuccess } from './TransitionActions'

function* addTransition({ payload }){
    try{
        const response = yield call(api.post, '/transitions', payload)

        toast.success('Nova transição adicionada')
        yield put(addTransitionSuccess(response.data))
    }catch(e){
        e.response.data.errors.map(error => toast.error(error))
        yield put(addTransitionFailure(e.response.data.errors))
    } 
}

function* getTransitions(){
    try{
        const response = yield call(api.get, '/transitions')

        yield put(getTransitionsSuccess(response.data))
    }catch(e){
        console.log(e)
    }
}

function* deleteTransition({ payload }){
    try{
        const response = yield call(api.delete, `/transitions/${payload}`)

        toast.success(response.data.msg)
        yield put(deleteTransitionSuccess(response.data.msg))
    }catch(e){
        console.log(e)
    }
}

export default all([
    takeLatest('ADD_TRANSITION_REQUEST', addTransition),
    takeLatest('GET_TRANSITIONS_REQUEST', getTransitions),
    takeLatest('DELETE_TRANSITION_REQUEST', deleteTransition)
])

