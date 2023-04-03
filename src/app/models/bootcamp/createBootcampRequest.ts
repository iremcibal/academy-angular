export interface CreateBootcampRequest{
    name:string;
    startDate: Date;
    endDate: Date;
    instructorId:number;
    stateId: number;
}