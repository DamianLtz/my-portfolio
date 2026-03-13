import { Helmet } from "react-helmet-async";
// import Beams from "./components/beams/Beams";
import Header from "./components/header/Header";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Aboutme from "./components/sections/Aboutme";
import Contactme from "./components/sections/Contactme";
import Footer from "./components/footer/Footer";
import DarkVeil from "./components/DarkVeil";

function App() {
  return (
    <>
      <Helmet>
        <title>Damian Laterza | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio de Damian Laterza, desarrollador frontend especializado en crear experiencias web modernas y performantes."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Damian Laterza | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Desarrollador frontend especializado en React, Next.js y experiencias web interactivas."
        />
        <meta
          property="og:image"
          content="https://portfolio-damian-laterza.vercel.app/og-image.png"
        />
        <meta
          property="og:url"
          content="https://portfolio-damian-laterza.vercel.app/"
        />

        {/* X (Ex Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Damian Laterza | Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Desarrollador frontend especializado en React, Next.js y experiencias web interactivas."
        />
        <meta
          name="twitter:image"
          content="https://portfolio-damian-laterza.vercel.app/og-image.png"
        />
      </Helmet>
      <Header />
      <div className="relative w-full h-dvh">
        <div className="absolute inset-0 z-0">
          {/* <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#1e50f4"
            speed={3.5}
            noiseIntensity={1.5}
            scale={0.2}
            rotation={30}
          /> */}
          <DarkVeil hueShift={20} speed={1.5} />
          <div className="absolute bottom-0 left-0 w-full h-48 md:h-96 bg-linear-to-t from-[#080808] to-transparent pointer-events-none" />
        </div>
        <main className="relative z-10 grid">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <Hero />
              <Aboutme />
              <Projects />
              <Contactme />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
