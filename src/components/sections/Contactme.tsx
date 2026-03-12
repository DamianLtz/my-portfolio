import { Mail, Github, Download, ArrowRight } from "lucide-react";
import Container from "../container/Container";
import SpotlightCard from "../SpotlightCard";

const contactLinks = [
  {
    icon: <Mail className="size-5" />,
    label: "damianlaterza@gmail.com",
    href: "mailto:damianlaterza@gmail.com",
  },
  {
    icon: <Github className="size-5" />,
    label: "github.com/DamianLtz",
    href: "https://github.com/DamianLtz",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="size-5"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
      </svg>
    ),
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/damian-laterza/",
  },
  {
    icon: <Download className="size-5" />,
    label: "Descargar CV",
    href: "/CV_Damian_Laterza.pdf",
    isDownload: true,
  },
];

export default function Contactme() {
  return (
    <Container classname="py-24" as="section">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-lg font-semibold uppercase text-spectrum-blue-400">
          Contacto
        </h2>
        <hr className="w-1/16 border-gray-800" />
      </div>

      <div className="grid grid-cols-12 gap-8 lg:gap-16">
        <div className="col-span-12 lg:col-span-6 space-y-8">
          <h3 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            Hablemos.
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Si tenés un proyecto en mente, una consulta técnica o simplemente
            querés saludar, escribime. Siempre estoy buscando nuevos desafíos y
            gente con quien colaborar.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <SpotlightCard className="bg-spectrum-blue-1000/50 border-gray-800 p-0 overflow-hidden backdrop-blur-sm">
            <div className="divide-y divide-gray-800/50">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={link.isDownload}
                  className="group flex items-center justify-between p-6 transition-colors hover:bg-gray-800/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-gray-400 transition-colors group-hover:border-spectrum-blue-500/50 group-hover:bg-spectrum-blue-500/10 group-hover:text-spectrum-blue-400">
                      {link.icon}
                    </div>
                    <span className="text-gray-300 font-medium transition-colors group-hover:text-white">
                      {link.label}
                    </span>
                  </div>
                  <ArrowRight className="size-5 text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-spectrum-blue-400" />
                </a>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </Container>
  );
}
