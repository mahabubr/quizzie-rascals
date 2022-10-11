import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Quiz from './components/Quiz/Quiz';
import Router from './router/Router';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Router />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/quiz/:id',
          element: <Quiz />,
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
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
