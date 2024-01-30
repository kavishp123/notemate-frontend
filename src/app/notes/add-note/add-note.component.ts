import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent implements OnInit {
  noteForm: FormGroup;
  userId: number = 0; // Assign a default value here

  constructor(
    private fb: FormBuilder,
    private notesService: NotesService,
    private cookieService: CookieService
  ) {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Log all cookies
    console.log('All Cookies:', document.cookie);

    // Fetch userId from cookies with a delay
    setTimeout(() => {
      this.userId = this.getUserIdFromCookies();
      console.log('ngOnInit - Fetched userId from cookies:', this.userId);
    }, 1000); // Try increasing the delay to 1000 milliseconds (1 second)
  }

  getUserIdFromCookies(): number {
    const userId = +this.cookieService.get('user_id');
    return userId;
  }

  onSubmit(): void {
    if (this.noteForm.valid) {
      const { title, description } = this.noteForm.value;
      console.log('onSubmit - userId before API call:', this.userId);
      this.notesService.addNote(this.userId, title, description).subscribe(
        (response) => {
          console.log('API Response:', response); // Handle success
        },
        (error) => {
          console.error('API Error:', error);
          console.warn('onSubmit - userId after API call:', this.userId);
        }
      );
    }
  }
}
