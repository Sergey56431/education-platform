import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {Button} from 'primeng/button';
import {BadgeDirective} from 'primeng/badge';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    Button,
    BadgeDirective
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {

}
