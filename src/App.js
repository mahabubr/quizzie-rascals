import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Router from './router/Router';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Router />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
