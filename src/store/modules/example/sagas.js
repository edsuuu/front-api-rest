import { call, put, all, takeLatest  } from 'redux-saga/effects';

import * as actions from './actions';
import * as types from '../types';

import { toast } from 'react-toastify';

const requisicao = () => new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve();
  }, 600);
});

function* exampleRequest() {
   try {
      toast.success('feita a requisao');
      yield call(requisicao);
      yield put(actions.clicaBotaoSucess());
   } catch {
      toast.error('Ocorreu um erro');
      yield put(actions.clicaBotaoFailure());  
   }
}

export default all([
   takeLatest(types.botao_clicado_request, exampleRequest),
]);