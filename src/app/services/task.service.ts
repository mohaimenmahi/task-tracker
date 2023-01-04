import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Task } from '../Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl:string = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) {}
  
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }
}
