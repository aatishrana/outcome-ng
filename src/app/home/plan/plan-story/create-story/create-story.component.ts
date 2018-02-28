import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductBacklog} from '../../../../model/backlog';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {

  @Input() selectedBacklog: ProductBacklog;
  @Output() save: EventEmitter<boolean>;

  constructor() {
  }

  ngOnInit() {
  }

  onSave() {
    this.save.next(true);
  }

}
