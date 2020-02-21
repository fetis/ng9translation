import { Component, Inject, Input, LOCALE_ID, OnChanges, SimpleChanges } from '@angular/core';
import * as localize from '@angular/localize';

const a = $localize`some string to localize`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  @Input() data: number;

  numberOfClicks = 0;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
  ) {
    localize.loadTranslations({
      resetButton: 'test'
    });

    console.log(a);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
