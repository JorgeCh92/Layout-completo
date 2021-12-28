import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username: string;

  constructor(private authService: AuthService) {
    this.username = this.authService.getUsername();
  }

  ngOnInit(): void {
  }

}
