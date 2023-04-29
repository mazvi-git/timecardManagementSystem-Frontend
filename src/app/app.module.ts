import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimecardListComponent } from './components/timecard/timecard-list/timecard-list.component';
import { TimecardFormComponent } from './components/timecard/timecard-form/timecard-form.component';
import { JobFormComponent } from './components/job/job-form/job-form.component';
import { MachineFormComponent } from './components/machine/machine-form/machine-form.component';
import { JobListComponent } from './components/job/job-list/job-list.component';
import { MachineListComponent } from './components/machine/machine-list/machine-list.component';
import { RouterModule, Routes } from '@angular/router';
import { JobService } from './services/job.service';
import { MachineService } from './services/machine.service';
import { TimecardService } from './services/timecard.service';
import { JobDetailsComponent } from './components/job/job-details/job-details.component';
import { MachineDetailsComponent } from './components/machine/machine-details/machine-details.component';
import { LoginComponent } from './components/login/login.component';
import { TimecardDetailsComponent } from './components/timecard/timecard-details/timecard-details.component';


const routes: Routes = [
  {path: 'jobs/:id', component: JobDetailsComponent},
  {path: 'machines/:id', component: MachineDetailsComponent},
  {path: 'timecards/:id', component: TimecardDetailsComponent},
  {path: 'jobs', component: JobListComponent},
  { path: 'machines', component: MachineListComponent },
  { path: 'timecards', component: TimecardListComponent },
  { path: ' ', redirectTo: '/jobs', pathMatch: 'full' },
  {path: '**', redirectTo: '/jobs', pathMatch: 'full'}

  // TODO LOGIN ROUTES FOR LATER
  // {path: 'login', component: LoginComponent},
  // { path: ' ', redirectTo: '/login', pathMatch: 'full' },
  // {path: '**', redirectTo: '/login', pathMatch: 'full'}
  
]


@NgModule({
  declarations: [
    AppComponent,
    TimecardListComponent,
    TimecardFormComponent,
    JobFormComponent,
    MachineFormComponent,
    JobListComponent,
    MachineListComponent,
    JobDetailsComponent,
    MachineDetailsComponent,
    LoginComponent,
    TimecardDetailsComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    JobService, MachineService, TimecardService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
