import {Component, OnInit} from '@angular/core';
import {CommonService} from './common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  overshadow = false;

  constructor(private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.commonService.OverShadow()
      .subscribe((value) => {
        this.overshadow = value;
      });
  }

  onCancel() {
    event.stopPropagation();
    this.commonService.overShadowOff();
  }
}
