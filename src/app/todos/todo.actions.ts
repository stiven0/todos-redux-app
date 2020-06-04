import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo.model';

export const crearTodo = createAction(
    '[TODO] Crea Todo',
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()

);

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, texto: string }>()
);

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{ id: number }>()
);

export const cambioTodo = createAction(
    '[TODO] CambioTodo todo',
    props<{ completado: boolean }>()
);

export const borrarCompletados = createAction('[TODO] Borrar completados');
