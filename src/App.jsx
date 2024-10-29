import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import jobsLoader from "./loaders/jobsLoader";

const App = () => {

  // Create a router object
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: jobsLoader
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;