import { Component, computed, Input, input, output } from '@angular/core';

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
  id = input.required<string>();
  select = output<string>();

  imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    this.select.emit(this.id());
  }
}
