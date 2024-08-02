import React from 'react'
import { useLocation } from 'react-router-dom'
import { useUpdateLoanMutation } from '../../services/loansApi';

function AgentDownpaymentForm() {
    var {state:loan} = useLocation();
    var [updateLoanFn]=useUpdateLoanMutation()
    console.log(loan)
    function downpaymentReceived(){
        var temp = JSON.parse(JSON.stringify(loan))
        temp.status.push({
            code:"downpayment received",
            timestamp:Date.now()
        })
        updateLoanFn(temp).then((res)=>{console.log(res)})
    }
  return (
    <div>
        AgentDownpaymentForm
        <h4>{loan.loanitem}</h4>
        <h4>{loan.downpayment}</h4>
        <h4>{loan.customerMobile}</h4>
        <button onClick={()=>{downpaymentReceived()}}>Recived</button>
    </div>
  )
}

export default AgentDownpaymentForm