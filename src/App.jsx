import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import jobsLoader from "./loaders/jobsLoader";
import JobDetails from "./pages/JobDetails";
import jobLoader from "./loaders/jobLoader";

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
    },
    {
      path: "/jobs/:id",
      element: <JobDetails />,
      loader: jobLoader
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;