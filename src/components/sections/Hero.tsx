import Container from "../container/Container";

export default function Hero() {
  return (
    <Container classname="py-20 h-dvh" as="section">
      <div className="flex flex-col h-full">
        <div className="grow flex flex-col justify-center gap-6 sm:gap-20">
          <h1 className="text-lg md:text-xl font-semibold">Damian Laterza</h1>
          <div className="flex flex-col md:items-center gap-4">
            <p className="text-3xl md:text-6xl tracking-[16px]">Frontend</p>
            <p className="md:pl-80 text-3xl md:text-6xl text-end tracking-[16px]">
              Developer
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:gap-10">
          <svg
            className="text-white size-32"
            width="8"
            height="49"
            viewBox="0 0 8 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.64645 48.3536C3.84171 48.5488 4.15829 48.5488 4.35356 48.3536L7.53554 45.1716C7.7308 44.9763 7.7308 44.6597 7.53554 44.4645C7.34027 44.2692 7.02369 44.2692 6.82843 44.4645L4 47.2929L1.17157 44.4645C0.976313 44.2692 0.65973 44.2692 0.464468 44.4645C0.269206 44.6597 0.269206 44.9763 0.464468 45.1716L3.64645 48.3536ZM3.5 2.18557e-08L3.5 48L4.5 48L4.5 -2.18557e-08L3.5 2.18557e-08Z"
              fill="currentColor"
            />
          </svg>
          <button className="btn-proyects" type="button">
            Mis Proyectos
            <span className="border-top-bottom"></span>
            <span className="border-left-right"></span>
          </button>
        </div>
      </div>
    </Container>
  );
}
