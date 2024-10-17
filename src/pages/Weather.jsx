import Header from "../components/Header";
import ConditionRendering from "../components/conditionalRendering/conditionRendering";

export default function Weather() {
    return (
      <>
      <Header />
        <h2>Weather Page</h2>
        <ConditionRendering />
        
      </>
    );
  }