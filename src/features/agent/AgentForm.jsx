import React from 'react'
import { useFormik } from 'formik'
import { useAddLoanMutation, useAddUserMutation, useGetAllLoanTypesQuery } from '../../services/loansApi'
import { useGetAllIntrestratesQuery } from '../../services/interestsApi'

function AgentForm() {
  var {isLoading:isLoantypeLoading,data:loantypes}=useGetAllLoanTypesQuery()
   var {isLoading:isInterestRatesLoading,data:interestRates} = useGetAllIntrestratesQuery()
   var [addLoanFn] = useAddLoanMutation()
   var [addUserFn] = useAddUserMutation()
  var loanForm=useFormik({
    initialValues:{
      "customerMobile":"",
      "email":"",
      "typeofloan":"",
      "loanitem":"",
      "productcost":0,
      "intrest":null,
      "downpayment":0,
      "status":[
        {
          "code":"applied",
          "timestamp":(new Date()).getTime()
        }
      ]
    },
    onSubmit:(values)=>{
      values.intrest=JSON.parse(values.intrest)
      addLoanFn(values).then((res)=>{console.log(res)}).catch((err)=>{console.error(err)})
      addUserFn({
        "username": values.email,
        "password": 123,
        "role": "customer",
        "mobile": values.customerMobile
      })
    }
  })
   
  return (
    <div>
        <h1>AgentForm</h1>
        <form onSubmit={loanForm.handleSubmit}>
          <input type="text" {...loanForm.getFieldProps('customerMobile')} placeholder='mobile' />
          <br />
          <input type="text" {...loanForm.getFieldProps('email')} placeholder='email' />
          <br />
          <select {...loanForm.getFieldProps("typeofloan")}>
            <option value="null" disabled selected>Please Select the Loan Type</option>
            {
              !isLoantypeLoading && loantypes?.map((lt)=>{
                return <option>{lt}</option>
              })
            }
          </select>
          <br />
          <input type="text" {...loanForm.getFieldProps('loanitem')} placeholder='loanitem' />
          <br />
          <input type="text" {...loanForm.getFieldProps('productcost')} placeholder='productcost' />
          <br />
          <select {...loanForm.getFieldProps('intrest')}>
            <option value="null" disabled selected>Please Select InterestRates</option>
            {
              !isInterestRatesLoading && interestRates?.map((ir)=>{
                return <option value={JSON.stringify(ir)}>{`${ir.rateofinterest}% for ${ir.tenure} ${ir.tenuretype}`}</option>
              })
            }
          </select>
          <br />
          <input type="text" {...loanForm.getFieldProps('downpayment')} placeholder='downpayment' />
          <br />
          <button>Apply Loan</button>
          <br />
        </form>
    </div>
  )
}

export default AgentForm