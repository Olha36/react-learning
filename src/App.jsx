import './App.css';
// import ConditionRendering from './components/conditionalRendering/conditionRendering';
// import UserProfile from './components/conditionalRendering/userProfile';
// import ProductAvailability from './components/conditionalRendering/productAvailability';
// import FormValidation from './components/conditionalRendering/formValidation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { About } from './pages';
import { Contact } from './pages';
// import Weather from './pages/About';
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
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
