import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { PLACEHOLDER_TEXT, TITLE_PAGE } from 'src/app/constants/text.constant';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // placeholderText: string = PLACEHOLDER_TEXT.TEXTBOX
  formLogin: FormGroup;
  hide = true // biến ẩn hiện mật khẩu
  isSignDivVisiable: boolean = false // biến chuyển dổi form đăng nhập và đăng ký

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

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  onRegister() {
    // hàm xử lý đăng ký
  }

  onLogin() {
    if (this.formLogin.valid) {
      const auth = this.firebaseService.auth;
      signInWithEmailAndPassword(auth, this.formLogin.controls['email'].value, this.formLogin.controls['password'].value)
        .then((userCredential) => {
          const user = userCredential.user;
          this.router.navigate(['/home'])
          alert('Đăng nhập thành công!')
        })
        .catch((error) => {
          alert('Đăng nhập thất bại!')
        });
    }
  }

}
