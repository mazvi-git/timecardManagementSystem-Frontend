import { Injectable } from '@angular/core';
import { Job } from '../shared/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {


  
  JobList: Job[] = [];
  
  constructor() { 
    this.JobList.push(new Job(2,'Painter', 'Painting', 25.5, 3)), 
    this.JobList.push(new Job(4,'Builder', 'Building', 20.5, 5))
  }
  
  // TODO
  getJob(theJobId: number) {
    
    // return single job that gets clicked on/edit
    console.log(`The Job ID is: ${theJobId}`)
    return theJobId

  }


}
