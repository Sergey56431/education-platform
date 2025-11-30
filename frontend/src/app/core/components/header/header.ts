import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from 'primeng/button';
import { BadgeDirective } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Popover } from 'primeng/popover';
import { NotifyPopup } from '@core/components';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    Button,
    BadgeDirective,
    Menu,
    Popover,
    NotifyPopup
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  protected readonly _menuItems = signal<MenuItem[]>([
    {
      label: 'Профиль',
      icon: 'pi pi-user',
      routerLink: '/profile'
    },
    {
      label: 'Выйти',
      icon: 'pi pi-sign-out',
      command: () => this._logout()
    }
  ]);

  private _logout() {
    console.log('logout');
  }
}
