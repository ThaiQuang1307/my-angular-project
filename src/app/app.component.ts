import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-project';

  constructor(
    private router: Router,
    // private toastService: ToastrService,
    private authService: AuthService
  ) { }

  logout(): void {
    this.authService.logout();
    // Điều hướng người dùng về trang đăng nhập sau khi logout (nếu cần)
    this.router.navigate(['/login'], { replaceUrl: true })
    // this.toastService.clear();
  }
}
