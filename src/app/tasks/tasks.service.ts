import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

import { Task } from './task';

@Injectable()
export class TasksService {

	private handleError: HandleError;
	
	constructor(
		private http: HttpClient,
		httpErrorHandler: HttpErrorHandler
	) {
		this.handleError = httpErrorHandler.createHandleError('TaskService');
	}

	listTasks(): Observable<Task[]> {
		return this.http.get<Task[]>('/api/tasks')
	}

	createTask(task: string): Observable<any> {
		const headers = { 'content-type': 'application/json' }
		const body = JSON.stringify({ title: task });
		return this.http.post('/api/tasks', body, { headers })
	}

	updateTask(task: Task): Observable<any> {
		const headers = { 'content-type': 'application/json' }
		const body = JSON.stringify(task);
		return this.http.put('/api/tasks/' + task.id, body, { headers })
	}
}