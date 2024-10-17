import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/css/home.css';
import './App.css';
import UserProfile from './components/conditionalRendering/userProfile';
import Form from './pages/Form';
import Home from './pages/Home';
import Product from './pages/Product';
import Weather from './pages/Weather';
function App() {
  return (
    <>
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
