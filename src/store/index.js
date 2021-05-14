import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
// import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import mySaga from './sagas'


const sagaMiddleware = createSagaMiddleware()
// const composedEnhancer = composeWithDevTools(sagaMiddleware)

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)
export default store
