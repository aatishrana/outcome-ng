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

  public static parse(obj) {
    if (!obj) {
      return null;
    }

    const id = obj.id ? obj.id : '';
    const desc = obj.desc ? obj.desc : '';
    const status = obj.status ? obj.status : '';
    const point = obj.point ? obj.point : '';
    const backlog = obj.backlog ? ProductBacklog.parse(obj.backlog) : null;
    const project = obj.project ? Project.parse(obj.project) : null;
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
