import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './router/Router';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Router />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
