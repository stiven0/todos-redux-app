import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public filtroActual: actions.filtrosValidos = 'todos';
  public filtros: actions.filtrosValidos[] =  ['todos', 'completados', 'pendientes'];

  public pendientes: number = 0;


  constructor( private store: Store<AppState> ) {
  }

  ngOnInit(): void {
    // this.store.select('filtros').subscribe( filtro => this.filtroActual = filtro );

    this.store.subscribe( state =>  {

      this.filtroActual = state.filtros;
      this.pendientes = state.todos.filter( todo => !todo.completado ).length;

    });
  }

  cambiarFiltro(filtro: actions.filtrosValidos) {
    this.store.dispatch( actions.setFiltro({ filtro }) );
  }

  limpiarCompletados() {
    this.store.dispatch( borrarCompletados() );
  }

}
