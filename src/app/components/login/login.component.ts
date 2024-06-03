import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: NonNullableFormBuilder,
  ) { }

  // Đăng nhập
  login(): void {
    if (this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)) {
      // Đăng nhập thành công, điều hướng tới trang admin hoặc user tùy vào vai trò
      if (this.authService.isAdmin) {
        // Điều hướng tới trang admin
        console.log('Trang admin')
      } else {
        // Điều hướng tới trang user
        this.router.navigate(['/page-error/cooming-soon/1']);
        console.log('Trang user')
      }
    } else {
      // Đăng nhập thất bại
      console.log('Login thất bại!')
    }
  }
}
