import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Notes } from '../notes.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-fetch-user-notes',
  templateUrl: './fetch-user-notes.component.html',
  styleUrls: ['./fetch-user-notes.component.css'],
})
export class FetchUserNotesComponent implements OnInit {
  notes: Notes[] = [];

  constructor(private notesService: NotesService, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.fetchNotes();
  }

  private fetchNotes(): void {
    // Fetch user_id from cookies
    const userId = this.cookieService.get('user_id');

    if (!userId) {
      console.error('User ID not found in cookies');
      return;
    }

    this.notesService.getNotesForUser(userId).subscribe(
      (notes: Notes[]) => {
        this.notes = notes;
      },
      (error: any) => {
        console.error('Error fetching notes:', error);
      }
    );
  }
}

