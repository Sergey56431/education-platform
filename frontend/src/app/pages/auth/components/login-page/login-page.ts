import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { Field, form } from '@angular/forms/signals';

@Component({
  selector: 'app-login-page',
  imports: [
    Card,
    InputText,
    Button,
    Field
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage {
  protected readonly _loginModel = signal({
    login: '',
    password: ''
  });

  protected readonly _loginForm = form(this._loginModel);

  protected _login() {
    console.log(this._loginForm().value());
  }
}
