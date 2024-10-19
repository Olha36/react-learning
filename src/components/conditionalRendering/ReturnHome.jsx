import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const ReturnHome = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home');
    console.log('home');
  };

  return <FaHome onClick={handleHomeClick} />;
};

export default ReturnHome;
