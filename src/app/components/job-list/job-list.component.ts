import { Component, OnInit} from '@angular/core';
import { Job } from 'src/app/shared/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit{
  jobs: Job[] = [];


  constructor(private dataService: JobService) { }
  ngOnInit() {
    this.jobs = this.dataService.JobList;
    // this.dataService.getJobs().subscribe(
    //   (data) => {this.jobs = data},
    //   (err) => { console.log(err) },
    //   () => console.log('Complete')  
    // )
  }
  deleteJob(jobID: number){
    console.log('Does nothing right now'+jobID);
  }
    
}
