export interface UpdateBootcampRequest{
    id:number,
    name:string;
    startDate: Date;
    endDate: Date;
    instructorId:number;
    stateId: number;
}