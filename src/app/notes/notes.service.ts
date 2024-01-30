// notes.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notes } from './notes.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private baseUrl = 'http://localhost:8080/api'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {}

  getNotesForUser(userId: string): Observable<Notes[]> {
    return this.http.get<Notes[]>(`${this.baseUrl}/notes/${userId}`);
  }

  addNote(userId: number, title: string, description: string): Observable<any> {
    const body = { userId, title, description };
    return this.http.post(`${this.baseUrl}/addnote`, body);
  }
}
