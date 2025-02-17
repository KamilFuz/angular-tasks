import {Component, computed, EventEmitter, input, output, Output, signal} from '@angular/core';

import { DUMMY_USERS} from "../dummy-users";
import {type User} from "./user.model";
import {CardComponent} from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();
  select = output<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  })
  onSelectedUser() {
    this.select.emit(this.user().id);
  }
}
