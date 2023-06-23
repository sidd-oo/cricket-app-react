import './App.css';
import Main from './pages/Main';
import TableContainer from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <TableContainer />,
      },
      {
        path: "/player",
        element: <h1>Hey Player</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
      </div>
    </RouterProvider>
  );
}

export default App;
