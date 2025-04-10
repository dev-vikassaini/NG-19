import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { UserComponent } from "./components/user/user.component";
import { DUMMY_USERS } from './constants/dummy-users';
import { UserSignalComponent } from './components/user-signal/user-signal.component';
import { TaskComponent } from "./components/task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, UserSignalComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

}
