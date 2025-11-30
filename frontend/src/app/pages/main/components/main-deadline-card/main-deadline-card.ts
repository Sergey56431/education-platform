import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Button} from "primeng/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main-deadline-card',
    imports: [
        Button,
        RouterLink
    ],
  templateUrl: './main-deadline-card.html',
  styleUrl: './main-deadline-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainDeadlineCard {

}
