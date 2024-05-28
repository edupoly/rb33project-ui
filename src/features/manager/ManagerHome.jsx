import React from 'react'
import { useGetAllLoansQuery } from '../../services/loansApi'

function ManagerHome() {
    var {isLoading:isLoansLoading,data:allLoans} = useGetAllLoansQuery()
  return (
    <div>
        <h1>Loans</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Loan Item</th>
                </tr>
            </thead>
            <tbody>
                {
                    !isLoansLoading && allLoans?.map((loan)=>{
                        return <tr>
                                <td>{loan.customerMobile}</td>
                                <td>{loan.email}</td>
                                <td>{loan.loanitem}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ManagerHome