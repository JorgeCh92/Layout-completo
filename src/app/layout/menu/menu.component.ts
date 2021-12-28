import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  username: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.username = this.authService.getUsername();
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout().subscribe(
      x => this.router.navigate(['/home'])
    );
  }

  isLogged(): Observable<boolean> {
    return this.authService.isLogged();
  }
}
