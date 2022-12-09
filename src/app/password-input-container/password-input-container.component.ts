import { Component } from '@angular/core';

@Component({
  selector: 'app-password-input-container',
  templateUrl: './password-input-container.component.html',
  styleUrls: ['./password-input-container.component.css'],
})
export class PasswordInputContainerComponent {
  password = '';
  passwordChanged(event: string) {
    this.password = event;
  }
}
