import "./styles/style.css";
import { RouterProvider, createBrowserRouter } from "react-router";
import Accueil from "./pages/Accueil";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Accueil />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/Service",
          element: <Service />,
        },
      ],
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
