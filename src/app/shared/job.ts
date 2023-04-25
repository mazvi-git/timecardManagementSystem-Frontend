export class Job {
    id: string;
    jobName: string;
    description: string;
    hourlyRate: number;
    maxNumOfHrPerDay: number;
 
    constructor(id:string, name:string, description:string, hourlyRate: number, maxNumOfHrPerDay: number){
        this.id = id;
        this.jobName = name;
        this.description = description;
        this.hourlyRate = hourlyRate;
        this.maxNumOfHrPerDay =maxNumOfHrPerDay;
    }
}
  