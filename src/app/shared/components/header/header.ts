import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
@Component({
  selector: 'app-header',
  imports: [Menubar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home'
      },
      {
        label: 'Intolerance Tracker',
        icon: 'pi pi-search',
        routerLink: 'overview'
      },
      {
        label: 'Login',
        icon: 'pi pi-star',
        routerLink: 'login'
      },
      {
        label: 'Register',
        icon: 'pi pi-search',
        routerLink: 'register'
      }
    ]
  }
}
