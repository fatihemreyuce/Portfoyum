// src/pages/Home.tsx
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, ArrowRight, Code2, Briefcase, Award } from "lucide-react";
import { Link } from "react-router-dom";
import SkillsDonut from "@/components/SkillsDonut"

export default function Home() {
  return (
    <Container>
      {/* HERO */}
      <section className="grid items-center gap-10 py-14 md:grid-cols-2">
        {/* Sol */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Merhaba, ben <span className="text-primary">Fatih Emre</span> 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Frontend geliştirme, modern web teknolojileri ve kullanıcı dostu arayüzler üzerine çalışıyorum.
            React, Tailwind CSS ve TypeScript ile projeler geliştiriyorum.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link to="/projects">
                Projelerime Göz At <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">İletişime Geç</Link>
            </Button>
          </div>
          <div className="flex gap-3">
            <a href="https://github.com/youruser" target="_blank" rel="noreferrer">
              <Github className="h-6 w-6 transition-colors hover:text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/youruser" target="_blank" rel="noreferrer">
              <Linkedin className="h-6 w-6 transition-colors hover:text-primary" />
            </a>
          </div>
        </div>

        {/* Sağ */}
        <div className="flex justify-center">
          <img
            src="/img/programmer.png"
            alt="Developer Illustration"
            className="w-72 rounded-xl shadow-lg md:w-96"
          />
        </div>
      </section>

      {/* İSTATİSTİKLER */}
      <section className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-3">
        <StatCard icon={<Code2 className="h-6 w-6 text-primary" />} title="20+" desc="Proje Tamamlandı" />
        <StatCard icon={<Briefcase className="h-6 w-6 text-primary" />} title="2+" desc="Yıl Deneyim" />
        <StatCard icon={<Award className="h-6 w-6 text-primary" />} title="5+" desc="Ödül & Sertifika" />
      </section>

      {/* ÖNE ÇIKAN PROJELER */}
      <section className="space-y-6 py-10">
        <h2 className="text-2xl font-bold tracking-tight">Öne Çıkan Projeler</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Otopark Sistemi", "Portfolio Site", "Blog Platformu"].map((proj, i) => (
            <Card key={i} className="transition hover:shadow-lg">
              <CardContent className="space-y-2 p-4">
                <h3 className="font-semibold">{proj}</h3>
                <p className="text-sm text-muted-foreground">
                  Bu proje modern web teknolojileri kullanılarak geliştirildi.
                </p>
                <Button variant="link" className="px-0" asChild>
                  <Link to="/projects">Detayları Gör</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* TEKNOLOJİLER */}
      <section className="space-y-4 py-10">
        <h2 className="text-2xl font-bold tracking-tight">Kullandığım Teknolojiler</h2>
        <div className="flex flex-wrap gap-4">
          {["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide Icons"].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* DONUT GRAFİK */}
      <section className="py-10">
        <SkillsDonut />
      </section>
    </Container>
  );
}

function StatCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card className="py-6 text-center">
      <CardContent className="space-y-2">
        <div className="flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{desc}</p>
      </CardContent>
    </Card>
  );
}
