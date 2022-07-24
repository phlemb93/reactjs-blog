import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import BlogDetails from './BlogDetails';
import NewBlog from './NewBlog';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/create" element={<NewBlog />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
