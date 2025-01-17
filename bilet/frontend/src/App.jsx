import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Catagori from './pages/Catagori';
import Latest from './pages/Latest';
import Blog from './pages/Blog';
import Pages from './pages/Pages';
import Contact from './pages/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wishlist from './pages/Wishlist';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/catagori',
          element: <Catagori />,
        },
        {
          path: '/latest',
          element: <Latest />,
        },
        {
          path: '/blog',
          element: <Blog />,
        },
        {
          path: '/pages',
          element: <Pages />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/wishlist',
          element :<Wishlist/>
        }
      ],
    },
  ]);

  
  return <RouterProvider router={router} />;
}

export default App;
