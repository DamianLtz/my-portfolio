import Container from "../container/Container";

export default function Hero() {
  return (
    <Container classname="py-20 h-dvh" as="section">
      <div className="flex flex-col h-full">
        {/* Contenedor central principal */}
        <div className="grow flex flex-col justify-center items-center w-full">
          <div className="flex flex-col w-full max-w-5xl justify-center px-4">
            {/* Nombre agrupado al título principal (Eyebrow) */}
            <div className="mb-4 sm:mb-2 md:pl-2">
              <h1 className="instrument-sans text-sm md:text-base font-medium tracking-[0.3em] uppercase text-blue-200/80">
                Damian Laterza
              </h1>
            </div>

            <div className="flex flex-col gap-2 md:gap-4">
              <p className="instrument-sans text-4xl sm:text-6xl lg:text-[5.5rem] tracking-[12px] md:tracking-[20px] font-extralight text-white/90">
                Frontend
              </p>
              <p className="instrument-sans text-4xl sm:text-6xl lg:text-[5.5rem] tracking-[12px] md:tracking-[20px] font-extralight md:self-end text-end text-white md:pr-10 lg:pr-20">
                Developer
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pb-4 sm:pb-8">
          <a
            href="#proyectos"
            aria-label="Ver proyectos"
            className="text-white/85 transition-colors"
          >
            <svg
              className="size-14"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z" />
            </svg>
          </a>
        </div>
      </div>
    </Container>
  );
}
