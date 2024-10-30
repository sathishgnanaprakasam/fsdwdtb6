import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import jobsLoader from "./loaders/jobsLoader";

const App = () => {

  // Create a router object
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/jobs",
      element: <Jobs />,
      loader: jobsLoader
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;