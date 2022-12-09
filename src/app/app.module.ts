import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { SectionComponent } from './section/section.component';
import { PasswordInputContainerComponent } from './password-input-container/password-input-container.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SectionComponent,
    PasswordInputContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
