import '../styles/App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import Board from './Board';
import Answer from './Answer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <Quiz />
  },
  {
    path: '/result',
    element: <Result />
  },
  {
    path: '/answer',
    element: <Answer />
  },
  {
    path: '/board',
    element: <Board />
  },
]);


export default function App() {
  return (
    <RouterProvider
    router={router}
  />
  );
};

