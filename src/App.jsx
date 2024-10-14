import './App.css';
import ConditionRendering from './components/conditionalRendering/conditionRendering';
import UserProfile from './components/conditionalRendering/userProfile';
import ProductAvailability from './components/conditionalRendering/productAvailability';

function App() {
  return (
    <>
      <h1>React learning</h1>

      <div className='conditional-rendering'>
        <h2>Conditional rendering:</h2>
        <ConditionRendering />
        <UserProfile />
        <ProductAvailability />
      </div>
    </>
  );
}

export default App;


