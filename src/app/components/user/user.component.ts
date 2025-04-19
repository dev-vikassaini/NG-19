import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../models/IUser';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user !: IUser;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
