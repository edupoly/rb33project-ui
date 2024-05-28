import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loansApi = createApi({
    reducerPath:"loansApi",
    baseQuery:fetchBaseQuery(
        {
            baseUrl:"http://localhost:4000/",
            prepareHeaders:(headers,{getState})=>{
                var token = JSON.parse(window.localStorage.getItem('user')).token
                console.log("Token in API",token)
                headers.set("token",token)
                return headers;
            }
        }
    ),
    endpoints:(builder)=>({
        getAllLoanTypes:builder.query({
            query:()=>"/loanTypes"
        }),
        getAllLoans:builder.query({
            query:()=>"/loans"
        }),
        addLoan:builder.mutation({
            query:(loan)=>{
                return {
                    url:"/loans",
                    method:'POST',
                    body:loan
                }
            }
        })
    })
})
export const {useGetAllLoanTypesQuery,useAddLoanMutation,useGetAllLoansQuery} = loansApi