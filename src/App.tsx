import { Helmet } from "react-helmet-async";
import Beams from "./components/beams/Beams";
import Header from "./components/header/Header";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Aboutme from "./components/sections/Aboutme";
import Contactme from "./components/sections/Contactme";
import Footer from "./components/footer/Footer";

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
        <div className="fixed inset-0 z-0">
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#1e50f4"
            speed={3.5}
            noiseIntensity={1.5}
            scale={0.2}
            rotation={30}
          />
        </div>
        <main className="relative z-10 grid">
          <Hero />
          <hr className="container mx-auto px-6 border-gray-700" />
          <div className="divide-y divide-gray-700">
            <Aboutme />
            <Projects />
            <Contactme />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
