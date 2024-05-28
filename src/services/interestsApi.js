import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const interestApi = createApi({
    reducerPath:"interestApi",
    baseQuery:fetchBaseQuery(
        {
            baseUrl:"http://localhost:4000/intrestrates",
            prepareHeaders:(headers,{getState})=>{
                var token = JSON.parse(window.localStorage.getItem('user')).token
                console.log("Token in API",token)
                headers.set("token",token)
                return headers;
            }
        }
    ),
    endpoints:(builder)=>({
        getAllIntrestrates:builder.query({
            query:()=>"/"
        })
    })
})
export const {useGetAllIntrestratesQuery} = interestApi