import { useState } from "react"
import Calculator from "./components/Calculator"
import Table from "./components/Table";

function App() {
  const [investmentValue,setInvestmentValue]=useState({
    initialInvestment:"",
    annualInvestment:"",
    expectedReturn:"",
    duration:""
  });

  function handleInvestment(name,userInput){
    setInvestmentValue((prevs)=>{
      return ({...prevs,[name]: +userInput});
    });
  }

  return (
    <>
      <Calculator onUserData={handleInvestment} val={investmentValue} />
      <Table annualData={investmentValue}  />
    </>
  )
}

export default App
