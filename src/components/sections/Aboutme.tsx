import { technologies } from "@/constants/technologies";
import Container from "../container/Container";
import SpotlightCard from "../SpotlightCard";
import Badge from "@/components/badge/Badge";

export default function Aboutme() {
  return (
    <Container classname="py-20" as="section">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold uppercase text-spectrum-blue-400">
          Sobre mí
        </h2>
        <hr className="w-1/16 border-gray-800" />
      </div>
      <div className="grid grid-cols-12 gap-4 lg:gap-8 my-6">
        <div className="col-span-12 lg:col-span-6 space-y-8 text-gray-400">
          <h3 className="text-4xl font-bold">Más que frontend</h3>
          <p className="text-inherit max-w-[64ch]">
            Un perfil fullstack con foco en interfaces de datos, herramientas
            internas y sistemas en producción.
          </p>
          <p className="text-inherit max-w-[64ch]">
            Soy developer con foco en{" "}
            <strong className="text-white">aplicaciones web complejas</strong>:
            backoffices, dashboards de datos y herramientas de gestión que
            equipos reales usan a diario.
          </p>
          <p className="text-inherit max-w-[64ch]">
            Me especializo en el stack{" "}
            <strong className="text-white">React / Next.js + TypeScript</strong>{" "}
            con integraciones fullstack via Prisma y Supabase. También tengo
            experiencia modernizando sistemas{" "}
            <strong className="text-white">PHP legacy</strong> agregándoles un
            frontend sólido con React + Inertia.js.
          </p>
          <p className="text-inherit max-w-[64ch]">
            Trabajo bien con equipos de diseño y product, entiendo el negocio y
            me adapto rápido. El código que entrego es mantenible, escalable y
            hecho para durar.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <SpotlightCard className="bg-spectrum-blue-1000">
            <h4 className="uppercase mb-4 text-gray-400 text-sm tracking-widest">
              Frontend
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {technologies.frontend.map((tech, index) => (
                <Badge key={`${tech}-${index}`} text={tech} />
              ))}
            </div>
            <hr className="my-4 border-gray-700" />
            <h4 className="uppercase mb-4 text-gray-400 text-sm tracking-widest">
              Backend & Data
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {technologies.backend.map((tech, index) => (
                <Badge key={`${tech}-${index}`} text={tech} />
              ))}
            </div>
            <hr className="my-4 border-gray-700" />
            <h4 className="uppercase mb-4 text-gray-400 text-sm tracking-widest">
              Tooling & Deploy
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {technologies.tooling.map((tech, index) => (
                <Badge key={`${tech}-${index}`} text={tech} />
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </Container>
  );
}
