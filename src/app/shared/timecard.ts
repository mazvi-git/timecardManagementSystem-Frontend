import { Job } from "./job";
import { Machine } from "./machine";
import { Site } from "./site";
import { User } from "./user";

export class Timecard {


    constructor(public id: number, public name: string, public submissionDate: Date, public site: Site, public status: string, public job: Job, public machine: Machine, public contractor: User, public approvedBy: User){}

}
