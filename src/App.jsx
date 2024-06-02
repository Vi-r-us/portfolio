import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const App = () => {
  // return <h1 className="text-3xl font-bold underline">Tailwind Portfolio</h1>
  return (
    <main
      className="p-6 pb-[5.5rem] flex flex-col gap-4
        max-w-[848px] tablet:pb-[6.375rem] mx-auto tablet:gap-6"
    >
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/licensing" element={<Licensing />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};
export default App;
