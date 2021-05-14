import {takeEvery, put } from 'redux-saga/effects';
import {GET_AJAX_LIST} from './actionType';
import {showAjaxListAction} from './createAction';
import axios from 'axios';

function* getlist(){
  const res =  yield axios.get('https://resumakeback.gotogermany.in/redux');
  const action=showAjaxListAction(res.data)
  yield put(action)
}

function* mySaga() {
  yield takeEvery(GET_AJAX_LIST, getlist)
}

export default mySaga;
