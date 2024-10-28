import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";

import { createContext, useState } from 'react';

// Create a context for the Auth
export const AuthContext = createContext();

const App = () => {

  const [auth, setAuth] = useState({
    user: null,
  });

  // create a router object
  const router = createBrowserRouter([
    {
      // root route
      path: "/",
      // component to render
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
}

export default App;