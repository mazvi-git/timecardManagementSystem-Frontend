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
import { Routes } from '@angular/router';
import { JobService } from './services/job.service';
import { MachineService } from './services/machine.service';
import { TimecardService } from './services/timecard.service';
import { JobDetailsComponent } from './components/job/job-details/job-details.component';


const routes: Routes = [
  {path: 'jobs/:id', component: JobListComponent},
  {path: 'machines/:id', component: MachineListComponent},
  {path: 'jobs', component: JobListComponent},
  {path: 'machines', component: MachineListComponent}
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
  ],
  imports: [
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
