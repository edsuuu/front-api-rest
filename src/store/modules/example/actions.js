import * as types from '../types';

export function clicaBotaoRequest() {
   return {
      type: types.botao_clicado_request,
   }
}
export function clicaBotaoSucess() {
   return {
      type: types.botao_clicado_sucess,
   }
}
export function clicaBotaoFailure() {
   return {
      type: types.botao_clicado_failure,
   }
}