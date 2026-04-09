import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Badge from "@/components/badge/Badge";
import Container from "@/components/container/Container";
import { proyectos } from "@/constants/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = proyectos.find((p) => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((i) => (i !== null ? Math.max(0, i - 1) : null));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((i) =>
          i !== null && project?.images
            ? Math.min(project.images.length - 1, i + 1)
            : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center gap-4">
        <p className="text-gray-400">Proyecto no encontrado.</p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-spectrum-blue-400 hover:text-spectrum-blue-300 transition-colors text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al portfolio
        </button>
      </div>
    );
  }

  const hasImages = project.images && project.images.length > 0;
  const aspectClass = {
    video: "aspect-video",
    portrait: "aspect-[9/16]",
    square: "aspect-square",
  }[project.imageAspect ?? "video"];

  const gridClass = {
    video: "grid-cols-1 md:grid-cols-2",
    portrait: "grid-cols-2 md:grid-cols-4",
    square: "grid-cols-2 md:grid-cols-3",
  }[project.imageAspect ?? "video"];

  return (
    <>
      <Helmet>
        <title>{project.title} | Damian Laterza</title>
      </Helmet>

      <div className="min-h-screen bg-[#080808] text-white">
        <Header />

        <main className="pt-24 pb-16">
          <Container classname="py-8">
            {/* Back button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-12 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span className="text-sm">Volver</span>
            </button>

            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="rounded-full bg-gray-800/50 px-3 py-1 outline outline-gray-700/50">
                  <span className="text-xs text-gray-400 font-medium">
                    {project.date}
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {project.title}
              </h1>
              <p className="whitespace-pre-line text-gray-400 text-base leading-relaxed max-w-2xl mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={`${tech}-${i}`} text={tech} />
                ))}
              </div>
            </motion.div>

            {/* Gallery */}
            {hasImages ? (
              <div className={`grid ${gridClass} gap-4`}>
                {project.images!.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`${aspectClass} cursor-pointer overflow-hidden rounded-lg border border-gray-800 hover:border-gray-600 transition-colors duration-300`}
                    onClick={() => setLightboxIndex(i)}
                  >
                    <img
                      src={src}
                      alt={`${project.title} — captura ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-48 rounded-lg border border-dashed border-gray-800">
                <p className="text-gray-600 text-sm">
                  Imágenes próximamente
                </p>
              </div>
            )}
          </Container>
        </main>

        <Footer />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && hasImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              src={project.images![lightboxIndex]}
              alt={`${project.title} — captura ${lightboxIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
