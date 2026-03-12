import Container from "../container/Container";

export default function Footer() {
  return (
    <Container as="footer" classname="py-8 relative z-10">
      <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © 2021 - {new Date().getFullYear()} ~ Damian Laterza
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/DamianLtz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/damian-laterza/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="/CV_Damian_Laterza.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors text-sm"
          >
            CV
          </a>
        </div>
      </div>
    </Container>
  );
}
