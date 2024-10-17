// import ConditionRendering from '../components/conditionalRendering/conditionRendering';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ConditionRendering from '../components/conditionalRendering/conditionRendering';
import FormValidation from '../components/conditionalRendering/formValidation';
import ProductAvailability from './Product';

export default function Home() {
  const navigate = useNavigate();

  const handleExerciseClick = () => {
    navigate('/weather');
    navigate('/form');
    navigate('/product');
    return (
      <>
        <ConditionRendering />
        <FormValidation />
        <ProductAvailability />
      </>
    );
  };
  return (
    <>
      <Header />
      <h2>Home Page</h2>
      {/* <ConditionRendering /> */}

      <button onClick={handleExerciseClick}>Click to see a weather exercise</button>
      <button onClick={handleExerciseClick}>Click to see a form validation exercise</button>
      <button onClick={handleExerciseClick}>Click to see a  product availability exercise</button>
    </>
  );
}
