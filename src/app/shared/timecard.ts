import { Site } from "./site";

export class Timecard {
    id: string;
    name: string;
    submissionDate: Date;
    site: Site;
    status: string;
    job: Job;
    machine: Machine;
    contractor: User;
    approvedBy: User;
}
