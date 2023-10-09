import { BrowserRouter } from "react-router-dom";
import {
  About,
  Navbar,
  Tech,
  Experience,
  Works,
  Contact,
  Preloader,
  Home,
} from "./components";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <div
            className={`darkblue-gradient w-full h-full text-white bg-cover bg-no-repeat relative z-0 overflow-hidden`}
          >
            <Navbar />

            <div
              className="w-full min-h-screen bg-gradient-to-r from-primary/10
       via-black/30 to-black/10 font-['Poppins']"
            >
              <Home />

              <About />
              <Tech />
              <Experience />
              <Works />
              <div className="relative z-0">
                <Contact />
              </div>
            </div>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
