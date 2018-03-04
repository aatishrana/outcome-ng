import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductBacklog} from '../../../../model/backlog';
import {CommonService} from '../../../../common/common.service';
import {Story} from '../../../../model/story';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {

  @Input() selectedBacklog: ProductBacklog;
  @Output() save: EventEmitter<Story> = new EventEmitter<Story>();
  private storyDesc = '';

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    if (this.selectedBacklog) {
      this.storyDesc = this.storyDesc.concat(this.selectedBacklog.desc);
    }
  }

  onSave() {
    const story = new Story('1',
      this.storyDesc,
      'open',
      5,
      this.selectedBacklog.clone(),
      null);
    this.save.next(story);
    this.commonService.overShadowOff();
  }

}
