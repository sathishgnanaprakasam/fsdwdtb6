import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";

const App = () => {

  // Create a router object
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;