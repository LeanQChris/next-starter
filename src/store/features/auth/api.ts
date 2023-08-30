import { protectedBaseQuery } from "@/store/baseQuery/protected.baseQuery";
import { createApi } from "@reduxjs/toolkit/dist/query";
import { SignIn } from "./auth.interface";

export const authAPI = createApi({
  baseQuery:protectedBaseQuery,
  reducerPath:"authAPI",
  endpoints:(build)=>({
    login:build.mutation<any,any>({
      query:(signInData:SignIn)=>({
            url:"",
            body:signInData,
            method:"POST"
        })
      })
    })
  })

export const {} = authAPI;