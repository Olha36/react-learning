// import ConditionRendering from '../components/conditionalRendering/conditionRendering';
import { useNavigate } from 'react-router-dom';
import Weather from '../components/conditionalRendering/conditionRendering';
import FormValidation from '../components/conditionalRendering/formValidation';
import ProductAvailability from '../components/conditionalRendering/productAvailability';
import UserProfile from '../components/conditionalRendering/userProfile';

export default function Home() {
  const navigate = useNavigate();

  const handleWeatherExerciseClick = () => {
    navigate('/weather');
    return (
      <>
        <Weather />
      </>
    );
  };

  const handleFormExerciseClick = () => {
    navigate('/form');
    return (
      <>
        <FormValidation />
      </>
    );
  };

  const handleProductExerciseClick = () => {
    navigate('/product');
    return (
      <>
        <ProductAvailability />
      </>
    );
  };

  const handleProfileExerciseClick = () => {
    navigate('/profile');
    return (
      <>
        <UserProfile />
      </>
    );
  };

  return (
    <>
      <h2>Home Page</h2>
      {/* <ConditionRendering /> */}

      <button onClick={handleWeatherExerciseClick}>Click to see a weather exercise</button>
      <button onClick={handleFormExerciseClick}>Click to see a form validation exercise</button>
      <button onClick={handleProductExerciseClick}>Click to see a product availability exercise</button>
      <button onClick={handleProfileExerciseClick}>Click to see a user profile exercise</button>
    </>
  );
}
