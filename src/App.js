import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Instagrame from "./pages/Instagrame";
import NavBar from "./components/NavBar";
import ErrorMessage from "./ErrorMessage";
import Footer from "./footer";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Instagrame/:id" element={<Instagrame />} />
        <Route path="*" element={<ErrorMessage />} />
      </Route>
    )
  );

  return (
    <div className="App">
   
        <RouterProvider router={router} />
   <Footer/>
    </div>
  );
}

export default App;
