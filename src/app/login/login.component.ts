import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  model: any = {
    username: '',
    password: ''
  };
  
  hide = true;

  loading = false;
  error = '';

  loginType: 'student' | 'teacher';

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    // Si esta fuera la url: https://lemoncode.net/master-frontend/login?type="student"

    // En forma de observable
    this.route.queryParams.subscribe(
      queryParams => this.loginType = queryParams['type']
    );

    // Como snapshot
    this.loginType = this.route.snapshot.queryParams['type'];
   }

  ngOnInit(): void {
    
  }

  login() {
    this.loading = true;
    this.authService.login(this.model)
        .subscribe(result => {
            if (result === true) {
                this.router.navigate(['/dashboard']);
            } else {
                this.error = 'Username or password is incorrect';
                this.loading = false;
            }
        });
}

}