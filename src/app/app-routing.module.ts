import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration/user-registration.component';
import { LoginComponent } from './user-registration/login/login.component';
import { FetchUserNotesComponent } from './notes/fetch-user-notes/fetch-user-notes.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';

const routes: Routes = [
  {
    path: 'user-registration',
    component: UserRegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'fetch-user-notes',
    component: FetchUserNotesComponent
  },
  {
    path:'add-note',
    component:AddNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
