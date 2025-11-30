import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-app-not-found',
  imports: [
    RouterLink
  ],
  templateUrl: './app-not-found.html',
  styleUrl: './app-not-found.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNotFound {

}
