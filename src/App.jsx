import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {

  // Create a router object
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Hello React!</h1>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;