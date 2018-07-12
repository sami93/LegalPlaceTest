import { Routes } from '@angular/router';


import {TodoListComponent} from './todo.component';

export const TodoListRoutes: Routes = [
    {

        path: '',
        children: [ {
            path: 'todo',
            component: TodoListComponent
        }]
    }
];
