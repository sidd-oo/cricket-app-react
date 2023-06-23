import './App.css';
import Home from './pages/Home';
import TableContainer from './components/Table/TableContainer'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "",
        element: <TableContainer />,
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
