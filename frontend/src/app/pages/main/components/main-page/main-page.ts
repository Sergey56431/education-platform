import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainCourseCard } from '../main-course-card';
import { MainDeadlineCard } from '../main-deadline-card';

@Component({
  selector: 'app-main-page',
  imports: [
    MainCourseCard,
    MainDeadlineCard
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPage {

}
