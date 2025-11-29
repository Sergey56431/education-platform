import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '@core/components';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    Header,
    RouterOutlet
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Layout {

}
