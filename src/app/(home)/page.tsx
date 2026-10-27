import About from "../about/page";
import Contact from "../contact/page";
import Experience from "../experience/page";
import Projects from "../projects/page";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
