import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Output() onEnterPassword = new EventEmitter<string>();
  inputValue = '';
  showPassword = false;

  ngOnInit(): void {}
  enterPassword(passwordInput: HTMLInputElement) {
    this.onEnterPassword.emit(passwordInput.value);
    this.inputValue = passwordInput.value;
  }

  handlePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
