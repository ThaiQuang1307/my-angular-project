import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TITLE_PAGE } from 'src/app/constants/text.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle(TITLE_PAGE.HOME);
  }
}
