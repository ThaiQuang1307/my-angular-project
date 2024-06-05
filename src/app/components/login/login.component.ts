import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PLACEHOLDER_TEXT, TITLE_PAGE } from 'src/app/constants/text.constant';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  placeholderText: string = PLACEHOLDER_TEXT.TEXTBOX
  formLogin: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
    private titleService: Title,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.titleService.setTitle(TITLE_PAGE.LOGIN);

    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      console.log('Form Submitted!', this.formLogin.value);

      // const auth = this.firebaseService.auth;
      // console.log(auth)
      // signInWithEmailAndPassword(auth, this.email, this.password)
      //   .then((userCredential) => {
      //     // Đăng nhập thành công
      //     const user = userCredential.user;
      //     console.log('Login successful:', user);
      //     this.errorMessage = '';
      //     this.router.navigate(['/home'])
      //   })
      //   .catch((error) => {
      //     // Đăng nhập thất bại
      //     console.error('Login failed:', error);
      //     this.errorMessage = error.message;
      //   });

      this.router.navigate(['/home'])

    }
  }

}
