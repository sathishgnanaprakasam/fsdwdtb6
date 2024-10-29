import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

const App = () => {

  // Create a router object
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Hello World</h1>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;