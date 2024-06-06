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
  // placeholderText: string = PLACEHOLDER_TEXT.TEXTBOX
  // formLogin: FormGroup;
  // hide = true

  // constructor(
  //   private firebaseService: FirebaseService,
  //   private titleService: Title,
  //   private router: Router,
  //   private fb: FormBuilder,
  // ) {
  //   this.titleService.setTitle(TITLE_PAGE.LOGIN);

  //   this.formLogin = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required]],
  //   });
  // }

  // onSubmit() {
  //   if (this.formLogin.valid) {
  //     console.log('Form Submitted!', this.formLogin.value);

  //     // const auth = this.firebaseService.auth;
  //     // console.log(auth)
  //     // signInWithEmailAndPassword(auth, this.email, this.password)
  //     //   .then((userCredential) => {
  //     //     // Đăng nhập thành công
  //     //     const user = userCredential.user;
  //     //     console.log('Login successful:', user);
  //     //     this.errorMessage = '';
  //     //     this.router.navigate(['/home'])
  //     //   })
  //     //   .catch((error) => {
  //     //     // Đăng nhập thất bại
  //     //     console.error('Login failed:', error);
  //     //     this.errorMessage = error.message;
  //     //   });

  //     this.router.navigate(['/home'])

  //   }
  // }

  isSignDivVisiable: boolean  = false;

  signUpObj: SignUpModel  = new SignUpModel();
  loginObj: LoginModel  = new LoginModel();

  constructor(private router: Router){}


  onRegister() {
    const localUser = localStorage.getItem('angular17users');
    if(localUser != null) {
      const users =  JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    }
    alert('Registration Success')
  }

  onLogin() {
    const localUsers =  localStorage.getItem('angular17users');
    if(localUsers != null) {
      const users =  JSON.parse(localUsers);

      const isUserPresent =  users.find( (user:SignUpModel)=> user.email == this.loginObj.email && user.password == this.loginObj.password);
      if(isUserPresent != undefined) {
        alert("User Found...");
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/dashboard');
      } else {
        alert("No User Found")
      }
    }
  }

}

export class SignUpModel  {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password= ""
  }
}

export class LoginModel  { 
  email: string;
  password: string;

  constructor() {
    this.email = ""; 
    this.password= ""
  }
}
