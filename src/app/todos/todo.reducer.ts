import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo( 'Salvar al mundo' ),
    new Todo( 'Venver a thanos' ),
    new Todo( 'Comprar traje de ironman' ),
    new Todo( 'Vencer a loki' )
];


// reducer
const _todoReducer = createReducer(initialState,

    on(actions.crearTodo, (state, { texto }) => [...state, new Todo( texto ) ]  ),

    on(actions.toggle, (state, { id }) => {

        return state.map( todo => {

            if ( todo.id === id ) {
                return {
                    ...todo,
                    completado: !todo.completado
                };
            } else {
                return todo;
            }

        });
    }),

    on(actions.editar, (state, { id, texto }) => {
        return state.map( todo => {
            if ( todo.id === id ) {
                return {
                    ...todo,
                    texto
                };

            } else {
                return todo;
            }
        });
    }),

    on(actions.borrar, (state, { id }) => state.filter( todo => todo.id !== id ) ),

    on(actions.cambioTodo, (state, { completado }) => state.map( todo => ({ ...todo, completado }) )),

    on(actions.borrarCompletados, state =>  state.filter( todo => !todo.completado ))

);

export function todoReducer( state, action ) {
    return _todoReducer( state, action );
}




