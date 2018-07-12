import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Issue} from '../models/issue';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {UserIssue} from '../models/userIssue';
import {UrlService} from './url.service';
import {TodoIssue} from "../models/todoIssue";

@Injectable()
export class DataService {


    constructor(private httpClient: HttpClient, private urlservice : UrlService) {
    }
    private readonly API_URL_Ancien = 'https://api.github.com/repos/angular/angular/issues';
    private readonly API_URL_Prediction = this.urlservice.url + '/api/predictions';
    private readonly API_URL = this.urlservice.url +'/api/dataset';
    private readonly API_URL_MatriculeOnePrediction = this.urlservice.url +'/api/predictionMat/';
    private readonly API_URL_User = this.urlservice.url +'/api/users';
    private readonly API_URL_Todo = this.urlservice.url +'/api/todo';

    dataChange: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);
    dataChangeUser: BehaviorSubject<UserIssue[]> = new BehaviorSubject<UserIssue[]>([]);
    dataChangeTodo: BehaviorSubject<TodoIssue[]> = new BehaviorSubject<TodoIssue[]>([]);


    // Temporarily stores data from dialogs
    dialogData: any;
    get data(): any[] {
        return this.dataChange.value;
    }

    get dataUser(): any[] {
        return this.dataChangeUser.value;
    }
    get dataTodo(): any[] {
        return this.dataChangeTodo.value;
    }





    getDialogData() {
        return this.dialogData;
    }

    /** CRUD METHODS */
    getAllIssues(): void {
        this.httpClient.get<Issue[]>(this.API_URL).subscribe(data => {
                this.dataChange.next(data);
            },
            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            });
    }

    getAllUserIssues(): void {
        this.httpClient.get<UserIssue[]>(this.API_URL_User).subscribe(data => {
                this.dataChangeUser.next(data);
            },
            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            });
    }
    getAllTodoIssues(): void {
        this.httpClient.get<TodoIssue[]>(this.API_URL_Todo).subscribe(data => {
                this.dataChangeTodo.next(data);
            },
            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            });
    }





    // DEMO ONLY, you can find working methods below
    addIssue(issue: Issue): void {
        this.dialogData = issue;
    }

    updateIssue(issue: Issue): void {
        this.dialogData = issue;
    }

    deleteIssue(id: number): void {
        console.log(id);
    }
    addUserIssue(userissue: UserIssue): void {
        this.dialogData = userissue;
    }

    updateUserIssue(userissue: UserIssue): void {
        this.dialogData = userissue;
    }

    deleteUserIssue(id: number): void {
        console.log(id);
    }

    addTodoIssue(todoissue: TodoIssue): void {
        this.dialogData = todoissue;
    }

    updateTodoIssue(todoissue: TodoIssue): void {
        this.dialogData = todoissue;
    }

    deleteTodoIssue(id: number): void {
        console.log(id);
    }
}


/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/




