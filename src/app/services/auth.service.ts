import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false
  isAdmin = false

  constructor() { }

  // Đăng nhập
  login(username: string, password: string): boolean {
    //Trong ví dụ này chỉ đơn giản kiểm tra username/password
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn = true
      this.isAdmin = true
      return true
    } else if (username === 'user' && password === 'user') {
      this.isLoggedIn = true
      this.isAdmin = false
      return true
    } else {
      this.isLoggedIn = false
      return false
    }
  }

  // Đăng xuất
  logout(): void {
    this.isLoggedIn = false
    this.isAdmin = false
  }
}
