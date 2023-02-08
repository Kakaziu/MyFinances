import { all } from 'redux-saga/effects'
import user from './user/sagas'
import trasition from './transition/sagas'

export default function* rootSaga(){
    return yield all([
        user,
        trasition,
    ])
}