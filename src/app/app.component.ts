import { Component, OnInit } from '@angular/core';
import { SecurityService } from './services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public router: Router, public security: SecurityService) {}

  public ngOnInit(): void {}

  public signOut(): void {
    this.security.signOut();
    this.router.navigate(['']).then((_) => document.location.reload());
  }
}
