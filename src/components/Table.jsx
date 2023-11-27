import React from 'react'
import { calculateInvestmentResults, formatter } from "../util/investment"
export default function Table({ annualData }) {
    const tableData = calculateInvestmentResults(annualData);
    let initialInvestment
    if(tableData.length){
         initialInvestment=
        tableData[0].valueEndOfYear - 
        tableData[0].interest - 
        tableData[0].annualInvestment;
    }


    return (

        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((data) => {
                    const totalInterest = 
                    data.valueEndOfYear -
                    data.annualInvestment * data.year
                     - initialInvestment;
                    const totalAmountInvested = data.valueEndOfYear - totalInterest;
                    return (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>)
                })}

            </tbody>
        </table>

    )
}
