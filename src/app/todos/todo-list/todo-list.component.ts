import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];
  public filtroActual: filtrosValidos;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {

    this.store.subscribe( ({todos, filtros}) => {
      this.todos = todos;
      this.filtroActual = filtros;
    });
  }

}
