import { baseUrl } from "@/core/constant/endpoints";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

 export const protectedBaseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: ()=>{},
});
