import { createReducer, on, } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

const _reducerFiltro = createReducer(initialState,
    on(setFiltro, (state, { filtro }) => filtro),

);

export function filtroReducer(  state, action ) {
    return _reducerFiltro( state, action );
}
