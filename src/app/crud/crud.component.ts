import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  username: string;

  constructor(private authService: AuthService) {
    this.username = this.authService.getUsername();
  }

  ngOnInit(): void {
  }

}
