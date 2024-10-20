import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Posts', action: this.navigateToPosts.bind(this) }
  ];

  constructor(private router: Router) {}

  private navigateToPosts() {
    this.router.navigate(['/post-list']); // Navega para a rota Posts
  }

}
