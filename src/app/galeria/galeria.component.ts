import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  username: string;

  constructor(private authService: AuthService) {
    this.username = this.authService.getUsername();
  }

  ngOnInit(): void {
  }

}
