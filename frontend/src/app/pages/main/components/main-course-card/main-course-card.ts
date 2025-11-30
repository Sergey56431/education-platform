import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ProgressBar} from 'primeng/progressbar';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-main-course-card',
  imports: [
    ProgressBar,
    RouterLink
  ],
  templateUrl: './main-course-card.html',
  styleUrl: './main-course-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainCourseCard {

}
