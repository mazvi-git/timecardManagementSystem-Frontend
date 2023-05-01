import { Component } from '@angular/core';
import { FormArray,FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})

export class JobFormComponent {

  jobForm = this.fb.group({
    
    jobCode: ['', Validators.required],
    description: ['', Validators.required],
    hourlyRate: ['', Validators.required],
    maxHours: ['', Validators.required],
    
  })
  
  
  constructor(private fb: FormBuilder){}
  

  onSubmit() {
    console.warn(`this is onSubmit ${this.jobForm.value}`)
  }

}
