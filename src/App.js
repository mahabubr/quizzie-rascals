import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Quiz from './components/Quiz/Quiz';
import Router from './router/Router';
import Topics from './components/Topics/Topics'
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog';


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
          path: '/topics',
          element: <Topics />,
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/quiz/:id',
          element: <Quiz />,
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        {
          path: '/statistics',
          element: <Statistics />,
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/blog',
          element: <Blog />,
        },
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
