import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // user$ = this.authService.getUserFire();

  // loginForm: FormGroup<{
  //   username: FormControl<string>;
  //   password: FormControl<string>;
  // }> = this.fb.group({
  //   username: ['', [Validators.required]],
  //   password: ['', [Validators.required]],
  // });

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private firebaseService: FirebaseService) { }

  login() {
    const auth = this.firebaseService.auth;
    console.log(auth)
    signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // Đăng nhập thành công
        const user = userCredential.user;
        console.log('Login successful:', user);
        this.errorMessage = ''; // Xóa thông báo lỗi nếu đăng nhập thành công
      })
      .catch((error) => {
        // Đăng nhập thất bại
        console.error('Login failed:', error);
        this.errorMessage = error.message;
      });
  }

}
