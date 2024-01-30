import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchUserNotesComponent } from './fetch-user-notes/fetch-user-notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FetchUserNotesComponent,
    AddNoteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class NotesModule { }
