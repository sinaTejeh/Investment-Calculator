import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

const USER_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(USER_INPUT);
  const inputIsValid = userInput.duration >= 1;
  const handleChange = function (inputIndentifier, newValue) {
    setUserInput(prevUserInpu => {
      return {
        ...prevUserInpu,
        [inputIndentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p id="error">Please Enter Valid Data Number</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App
