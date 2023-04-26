import { Component } from '@angular/core';
import { Job } from '../../../shared/job';
import { JobService } from '../../../services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {

  job!: Job
  
  constructor(private jobService: JobService,
              private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleJobDetails()
    })
  }

    handleJobDetails() {
      const theJobId: number = +this.route.snapshot.paramMap.get('id')!

      this.jobService.getJob(theJobId)

      console.log(`Handling Job Details function, value coming back for theJobID is: ${theJobId} `)

      // HTTP method stuff

      // this.jobService.getJob(theJobId).subscribe(
      //     data => {
      //       this.job = data
      //   }
      // )
    }


  


}

