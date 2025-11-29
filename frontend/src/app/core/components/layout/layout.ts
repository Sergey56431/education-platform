import {Component} from '@angular/core';
import {Header} from "@core/components";

@Component({
  selector: 'app-layout',
  imports: [
    Header
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
