import * as types from '../types';

const initialState = {
   botaoClicado: false,
}

export default function reducer(state = initialState, action) {
   switch (action.type) {
      case types.botao_clicado_sucess: {
         console.log('sucesso');
         const newState = { ...state };
         newState.botaoClicado = !newState.botaoClicado;
         return newState;
      }

      case types.botao_clicado_request: {
         console.log('estou fazendo a requisição');
         return state;
      }
      
      case types.botao_clicado_failure: {
         console.log('eu falhei');
         return state;
      }

      default: {
         return state;
      }

   }
};