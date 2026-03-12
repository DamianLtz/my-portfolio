import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import Container from "../container/Container";

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      className="fixed top-0 z-50 w-full transition-colors duration-300"
      animate={{
        borderBottom: isScrolled
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(255, 255, 255, 0)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
      }}
    >
      <Container classname="py-4" as="nav">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold">DL</p>
          <ul className="flex items-center gap-6">
            <li>
              <a href="#" className="underline-links">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#" className="underline-links">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </motion.header>
  );
}
