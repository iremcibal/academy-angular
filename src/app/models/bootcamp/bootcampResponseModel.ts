import { Bootcamp } from "./bootcamp";
import { ResponseModel } from "../responseModel";

export interface BootcampResponseModel extends ResponseModel{
     data:Bootcamp[]
     
}