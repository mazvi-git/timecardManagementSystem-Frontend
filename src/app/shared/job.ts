export class Job {
    
    constructor(public id: number,
                public name: string,
                public description: string,
                public hourlyRate: number,
                public maxNumOfHrPerDay: number) { }
}
