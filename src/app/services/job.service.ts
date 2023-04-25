import { Injectable } from '@angular/core';
import { Job } from '../shared/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  JobList: Job[] = [];

  constructor() { 
    this.JobList.push(new Job('2','Painter', 'Painting', 25.5, 3)), 
    this.JobList.push(new Job('4','Builder', 'Building', 20.5, 5))
  }
}
