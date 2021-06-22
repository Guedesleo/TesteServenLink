import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css'],
})
export class SigupComponent {
  signInForm: FormGroup;
  isSignedIn = false;
  constructor(public firebaseService: FirebaseService, public fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.maxLength(25)]],
    });
  }

  ngOnInit(): void {}
  async onSignup(email: string, password: string) {
    if (email != null) {
      await this.firebaseService.signup(email, password);
      if (this.firebaseService.isLoggedIn) this.isSignedIn = true;
    }
  }
}
