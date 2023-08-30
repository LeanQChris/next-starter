import { PaginationMetaDTO } from "./pagination.base";

export interface APIBaseResponse<t>{
  statusCode:number;
  timeStamp?:string;
  message:string;
  error?:any;
  data:t,
  meta?:PaginationMetaDTO
}