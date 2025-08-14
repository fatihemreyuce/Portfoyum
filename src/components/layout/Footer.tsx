import Container from "@/components/layout/Container";
import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-6 text-sm">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} FEY.dev — Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 hover:underline">
              <Mail className="h-4 w-4" /> E-posta
            </a>
            <a href="https://github.com/youruser" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 hover:underline">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
