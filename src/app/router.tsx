import { createBrowserRouter } from "react-router-dom";
import Shell from "./Shell";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Contact from "@/pages/Contact";

export const router = createBrowserRouter([
  {
    element: <Shell />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/about", element: <About /> },
      { path: "/skills", element: <Skills /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
