export interface ListBootcampResponse{
    id:number,
    name:string;
    startDate: Date;
    endDate: Date;
    instructorId:number;
    stateId: number;
    imageId:number,
    imageImagePath:string,
    instructorUserFirstName:string,
    instructorUserLastName:string,
    stateInfo:string
}