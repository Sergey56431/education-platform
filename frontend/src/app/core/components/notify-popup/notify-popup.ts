import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeDirective } from 'primeng/badge';
import { Divider } from 'primeng/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notify-popup',
  imports: [
    BadgeDirective,
    Divider,
    RouterLink
  ],
  templateUrl: './notify-popup.html',
  styleUrl: './notify-popup.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotifyPopup {

}
