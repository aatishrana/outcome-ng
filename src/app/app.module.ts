import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './home/dashboard/dashboard.component';
import {PlanComponent} from './home/plan/plan.component';
import {WorkComponent} from './home/work/work.component';
import {TeamComponent} from './home/team/team.component';
import {ProjectComponent} from './home/project/project.component';
import {ProductComponent} from './home/product/product.component';
import {MainService} from './common/main.service';
import { PlanStoryComponent } from './home/plan/plan-story/plan-story.component';
import { PlanSprintComponent } from './home/plan/plan-sprint/plan-sprint.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DashboardComponent,
    PlanComponent,
    WorkComponent,
    TeamComponent,
    ProjectComponent,
    ProductComponent,
    PlanStoryComponent,
    PlanSprintComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent,
        children: [
          {path: '', component: DashboardComponent, pathMatch: 'full'},
          {path: 'plan', component: PlanComponent},
          {path: 'work', component: WorkComponent},
          {path: 'team', component: TeamComponent},
          {path: 'project', component: ProjectComponent},
          {path: 'product', component: ProductComponent},
        ]
      }
    ])
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
