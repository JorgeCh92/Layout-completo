import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  username: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.username = this.authService.getUsername();
  }

  ngOnInit(): void {
  }
}
