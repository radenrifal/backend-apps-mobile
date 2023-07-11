import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, LoadingController, MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonContent) content: IonContent | undefined;
  email: string = '';
  password: string = '';

  showToolbar = false;

  login_forms: any;
  submitAttempt = false;
  keyboardStyle = { margin: '0' };
  keyboardHeight = 0;
  focusedElTop = 0;
  viewportHeight = 0;

  constructor(
  ) { }

  ngOnInit() {}

}
