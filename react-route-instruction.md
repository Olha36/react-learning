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
7. In the pages folder create files with the name of the pages(for example Home.jsx, About.jsx, or any other names that you need)
8. In each page file create a function with the name of the file and export it, e.g:
export default function Example() {
    return (
      <div>
        <h1>Example</h1>
      </div>
    );
}
9. In the app.jsx file import the pages(for example About) from the pages folder
10. Call function component from the page in the Home.jsx file
11. remember to export all components
12. add new pages to the app.jsx in the route path, e.g:
<Route path='/weather' element={<Weather />} />
