import './App.css';
import Main from './pages/Main';
import TableContainer from './pages/Home'
import PlayerInfo from './pages/PlayerInfo'

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
        path: "/player/:playerId",
        element: <PlayerInfo/>,
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
