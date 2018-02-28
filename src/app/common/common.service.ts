import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
/**
 * Created by Aatish Rana on 28-Feb-18.
 */

@Injectable()
export class CommonService {
  private overshadow: BehaviorSubject<boolean>;

  constructor() {
    this.overshadow = new BehaviorSubject<boolean>(false);
  }

  public OverShadow() {
    return this.overshadow;
  }

  public overShadowOn() {
    this.overshadow.next(true);
  }

  public overShadowOff() {
    this.overshadow.next(false);
  }
}
