import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  // Kiểm tra quyền truy cập
  canActivate(): boolean {
    // if (this.authService.isLoggedIn) {
    //   return true;
    // } else {
    //   // Nếu không đăng nhập, điều hướng về trang đăng nhập
    //   this.router.navigate(['/login']);
    //   return false;
    // }

    return true
  }
}
