import React, { useState, useEffect } from "react";
import Header from "./Header";
import Plan from "./Plan";
import plansData from "../plans.json";
import "../App.css";

function App() {
  const [plans, setPlans] = useState(plansData);

  useEffect(() => {
    setPlans(plansData);
  }, []);

  return (
    <div className="App">
      <Header text="PRICING PLANS" />
      {plans.map((plan, index) => (
        <Plan key={`${index}-${plan.id}`} plan={plan} />
      ))}
    </div>
  );
}

export default App;
