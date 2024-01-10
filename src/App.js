import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Create } from './MyComponent/Create';
import { Navbar } from './MyComponent/Navbar';
import View from './MyComponent/View';
import Home from './MyComponent/Home';
import EditBlog from './MyComponent/EditBlog';
import Error from './MyComponent/Error';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/addPost' element={<Create />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/edit/:id' element={<EditBlog />} />
            <Route exact path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
