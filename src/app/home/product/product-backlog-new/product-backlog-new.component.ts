import {Component, Input, OnInit} from '@angular/core';
import {ProductBacklog} from '../../../model/backlog';

@Component({
  selector: 'app-product-backlog-new',
  templateUrl: './product-backlog-new.component.html',
  styleUrls: ['./product-backlog-new.component.css']
})
export class ProductBacklogNewComponent implements OnInit {

  @Input() prodId = '';
  @Input() backlog: ProductBacklog = null;
  @Input() newEditType = '';

  constructor() {
  }

  ngOnInit() {
    if (this.newEditType == 'Edit') {

    }
  }

}
