import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/css/home.css';
import Form from './pages/Form';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Product from './pages/Product';
import UserProfile from './components/conditionalRendering/userProfile';
function App() {
  return (
    <>
      {/* <h1>React learning</h1>

      <div className='conditional-rendering'>
        <h2>Conditional rendering:</h2>
        <ConditionRendering />
        <UserProfile />
        <ProductAvailability />
        <FormValidation />
      </div> */}

      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/weather' element={<Weather />} />
            <Route path='/form' element={<Form />} />
            <Route path='/product' element={<Product />} />
            <Route path='/profile' element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
