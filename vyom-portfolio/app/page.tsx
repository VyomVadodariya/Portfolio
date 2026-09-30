import { Hero }       from "@/sections/Hero";
import { Work }       from "@/sections/Work";
import { Hackathons } from "@/sections/Hackathons";
import { Skills }     from "@/sections/Skills";
import { Origin }     from "@/sections/Origin";
import { Education }  from "@/sections/Education";
import { Proof }      from "@/sections/Proof";
import { Contact }    from "@/sections/Contact";
import { Footer }     from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Hackathons />
      <Skills />
      <Origin />
      <Education />
      <Proof />
      <Contact />
      <Footer />
    </main>
  );
}
