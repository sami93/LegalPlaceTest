import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule, DatePipe} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import { TodoListRoutes } from './todo.routing';
import {TodoListComponent} from './todo.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AddDialogComponent} from '../dialogtodo/add/add.dialog.component';
import {DeleteDialogComponent} from 'app/dialogtodo/delete/delete.dialog.component';
import {DataService} from '../services/data.service';
import {DataSetService} from '../services/dataset.service';
import {HttpModule} from '@angular/http';
import {ParticlesModule} from 'angular-particle';
import {TeximateModule} from 'ng-teximate';
import {TodoService} from '../services/todo.service';
import {EditDialogComponent} from '../dialogtodo/edit/edit.dialog.component';
import {UrlService} from '../services/url.service';


@NgModule({
    declarations: [
        TodoListComponent,
        AddDialogComponent,
        EditDialogComponent,
        DeleteDialogComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(TodoListRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        ParticlesModule,
        TeximateModule

    ],

    entryComponents: [
        AddDialogComponent,
        EditDialogComponent,
        DeleteDialogComponent
    ],
    providers: [
        DataService,
        DataSetService,
        DatePipe,
        TodoService,
        UrlService
    ]
})

export class TodoListModule {}
