import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(public firebaseService: FirebaseService) {}

  ngOnInit(): void {}

  async forgotPassword(email: string) {
    if (email != '') {
      await this.firebaseService.forgotPasswords(email);
    } else {
      window.alert('Email incompleto digite Novamente!!');
    }
  }
}
