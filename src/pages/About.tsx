import Container from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Calendar, Download, Code2 } from "lucide-react";

export default function About() {
  return (
    <Container>
      <div className="py-10 space-y-8">
        {/* HERO */}
        <section className="grid items-center gap-6 md:grid-cols-[auto,1fr]">
          <Avatar className="h-24 w-24 rounded-2xl ring-1 ring-muted">
            {/* Kendi görselini ekle: /assets/avatar.jpg */}
            <AvatarImage src="/avatar.jpg" alt="Avatar" />
            <AvatarFallback>FE</AvatarFallback>
          </Avatar>
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight">
              Fatih Emre Yüce <span className="text-primary">— Frontend Developer</span>
            </h1>
            <p className="text-muted-foreground">
              React + TypeScript + Tailwind ile modern, performanslı ve sade arayüzler geliştiriyorum.
              shadcn/ui ve lucide ile tasarımı hızlandırıp, temiz component mimarisi ve güçlü tip güvenliği ile ölçeklenebilir kod yazıyorum.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm"><a href="/contact"><Mail className="mr-2 h-4 w-4" /> Bana Ulaş</a></Button>
              <Button asChild size="sm" variant="outline"><a href="https://github.com/youruser" target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a></Button>
              <Button asChild size="sm" variant="outline"><a href="https://www.linkedin.com/in/youruser" target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a></Button>
              <Button size="sm" variant="secondary" onClick={() => window.open("/cv.pdf", "_blank")}>
                <Download className="mr-2 h-4 w-4" /> CV’yi İndir
              </Button>
            </div>
          </div>
        </section>

        {/* HIZLI BILGILER */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <InfoTile icon={<MapPin className="h-4 w-4" />} title="Konum" text="Gebze / Kocaeli" />
          <InfoTile icon={<Calendar className="h-4 w-4" />} title="Deneyim" text="2+ yıl proje/öğrenme" />
          <InfoTile icon={<Code2 className="h-4 w-4" />} title="Odak" text="React • TS • Tailwind" />
          <InfoTile icon={<Github className="h-4 w-4" />} title="Repo" text="Aktif açık kaynak" />
        </section>

        {/* TEKNOLOJILER / ROZETLER */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Teknolojiler</h2>
          <Card className="rounded-2xl">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2">
                <Tech tag="TypeScript" />
                <Tech tag="React" />
                <Tech tag="Tailwind" />
                <Tech tag="shadcn/ui" />
                <Tech tag="Vite" />
                <Tech tag="Recharts" />
                <Tech tag="Node (temel)" />
                <Tech tag="REST API" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* DENEYIM TIMELINE */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Deneyim</h2>
          <Card className="rounded-2xl">
            <CardContent className="p-4">
              <div className="space-y-6">
                <TimelineItem
                  when="2025 — Güncel"
                  where="Freelance / Kişisel Projeler"
                  what="Portföy, admin mini-paneller, blog temaları"
                  tech={["React", "TS", "Tailwind", "shadcn"]}
                />
                <Separator />
                <TimelineItem
                  when="2024 — 2025"
                  where="Staj / TÜBİTAK MAM"
                  what="Frontend pratikleri, UI sistemleri, komponent mimarisi"
                  tech={["React", "Tailwind", "lucide"]}
                />
                <Separator />
                <TimelineItem
                  when="2023 — 2024"
                  where="Akademik / Öğrenme"
                  what="Temel JS → TS geçişi, DOM, fetch API, basit Node REST"
                  tech={["JS/TS", "DOM", "REST"]}
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* EĞITIM */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Eğitim</h2>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Yazılım Mühendisliği — Lisans</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                Algoritma, veri yapıları, OOP, yazılım süreçleri; proje odaklı öğrenme.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">C / C++</Badge>
                <Badge variant="outline">Veri Yapıları</Badge>
                <Badge variant="outline">Yazılım Analizi</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border bg-muted/30 p-6 text-center">
          <h3 className="text-lg font-semibold">Birlikte çalışalım mı?</h3>
          <p className="mt-2 text-muted-foreground">
            Frontend projeleriniz için hızlı prototipleme ve temiz component mimarisi.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Button asChild><a href="/contact"><Mail className="mr-2 h-4 w-4" /> İletişime Geç</a></Button>
            <Button asChild variant="outline"><a href="/projects"><Code2 className="mr-2 h-4 w-4" /> Projelere Bak</a></Button>
          </div>
        </section>
      </div>
    </Container>
  );
}

/* -------------------- küçük yardımcı bileşenler -------------------- */

function InfoTile({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="flex items-center gap-3 p-4">
        <span className="grid h-9 w-9 place-items-center rounded-xl border bg-background">{icon}</span>
        <div>
          <div className="text-xs uppercase text-muted-foreground">{title}</div>
          <div className="text-sm font-medium">{text}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function Tech({ tag }: { tag: string }) {
  return <Badge variant="secondary" className="capitalize">{tag}</Badge>;
}

function TimelineItem({
  when, where, what, tech,
}: { when: string; where: string; what: string; tech: string[] }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[160px,1fr]">
      <div className="text-sm text-muted-foreground">{when}</div>
      <div>
        <div className="font-medium">{where}</div>
        <div className="text-sm text-muted-foreground">{what}</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {tech.map((t) => (<Badge key={t} variant="outline" className="capitalize">{t}</Badge>))}
        </div>
      </div>
    </div>
  );
}
