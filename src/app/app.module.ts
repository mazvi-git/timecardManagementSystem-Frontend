import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimecardListComponent } from './components/timecard-list/timecard-list.component';
import { TimecardFormComponent } from './components/timecard-form/timecard-form.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { MachineFormComponent } from './components/machine-form/machine-form.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { MachineListComponent } from './components/machine-list/machine-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TimecardListComponent,
    TimecardFormComponent,
    JobFormComponent,
    MachineFormComponent,
    JobListComponent,
    MachineListComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
