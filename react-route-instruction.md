1. install react-router-dom
2. create pages folder
3. In the app.jsx file import { BrowserRouter, Routes, Route } from 'react-router-dom';
4. In the app.jsx file import the pages(for example Home) from the pages folder
5. In the app.jsx file use the BrowserRouter, Routes, Route and the pages:
<div>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
    </BrowserRouter>
</div>
6. add /home to the url to see the Home page
7. 