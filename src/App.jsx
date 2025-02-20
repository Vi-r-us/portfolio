import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Licensing from "./pages/Licensing";
import { useGlobalContext } from "./context";
import SingleProject from "./pages/SingleProject";

/**
 * Main application component.
 * Handles routing and displays the appropriate components based on the URL path.
 * Also displays a loading state when the application is loading.
 */
const App = () => {
  const { loading } = useGlobalContext();

  return (
    <main
      className={`p-6 pb-[5.5rem] flex flex-col gap-4 max-w-[848px] min-h-lvh tablet:pb-[6.375rem] mx-auto tablet:gap-6 ${
        loading ? "items-center justify-center" : ""
      }`}
    >
      {/* Display loading message if loading, otherwise display the main content */}
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <Navbar /> {/* Navigation bar */}
          <Header /> {/* Header section */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<SingleProject />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/licensing" element={<Licensing />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer /> {/* Footer section */}
        </>
      )}
    </main>
  );
};
export default App;
