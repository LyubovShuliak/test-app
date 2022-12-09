import {
  Component,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Output() onEnterPassword = new EventEmitter<string>();
  inputValue = '';
  ngOnInit(): void {}
  enterPassword(passwordInput: HTMLInputElement) {
    this.onEnterPassword.emit(passwordInput.value);
    this.inputValue = passwordInput.value;
  }
}
