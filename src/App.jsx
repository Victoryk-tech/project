import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";

import { Home } from "./component/Home";
import { Project } from "./component/Project";

function App() {
  return (
    <div className="mx-auto h-full bg-[#1b1f24] text-[#fff]">
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
