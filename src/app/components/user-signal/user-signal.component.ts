import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user-signal',
  imports: [],
  standalone: true,
  templateUrl: './user-signal.component.html',
  styleUrl: './user-signal.component.css'
})
export class UserSignalComponent {
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    console.log('Selected user:', this.name);
  }
}
