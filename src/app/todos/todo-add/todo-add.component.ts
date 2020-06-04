import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  textInput: FormControl;

  constructor(private store: Store<AppState> ) {
    this.textInput = new FormControl( '', Validators.required  );
  }

  ngOnInit(): void {
    // this.store.select('todos').subscribe( todo => console.log(todo) );
  }

  agregar() {

    if ( this.textInput.invalid ) {  return; }

    // disparamos la accion
    this.store.dispatch( actions.crearTodo({ texto : this.textInput.value }) );

    this.textInput.reset();

  }

}
