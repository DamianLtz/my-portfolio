import { CardGitHub } from "@/components/CardGitHub";
import { Presentation } from "@/components/Presentation";
import { Proyects } from "@/components/Proyects";

export default function Home() {
  return (
    <main className="container px-6 text-white">
      <Presentation />
      <Proyects />
      <CardGitHub />
    </main>
  );
}

/* Falta arreglar las animaciones del navbar y demás */
