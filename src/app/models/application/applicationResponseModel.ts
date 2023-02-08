import { ResponseModel } from "../responseModel";
import { Application } from "./application";

export interface ApplicationResponseModel extends ResponseModel{
    data:Application
}