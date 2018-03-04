import {ProductBacklog} from './backlog';
import {Project} from './project';
/**
 * Created by Aatish on 3/3/2018.
 */
export class Story {
  constructor(public id: string,
              public desc: string,
              public status: string,
              public point: number,
              public backLog: ProductBacklog,
              public project: Project) {
  }

  clone(): Story {
    return new Story(this.id,
      this.desc,
      this.status,
      this.point,
      this.backLog,
      this.project);
  }
}
