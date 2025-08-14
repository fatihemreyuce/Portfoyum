import Container from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Search, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";

/* ------------------------------------------------------------------ */
/* Tipler ve örnek veriler                                            */
/* ------------------------------------------------------------------ */

type Skill = {
  name: string;
  level: number; // 0-100
  tags?: string[];
};

const FRONTEND: Skill[] = [
  { name: "TypeScript", level: 86, tags: ["types", "safety"] },
  { name: "React", level: 88, tags: ["hooks", "router"] },
  { name: "Tailwind CSS", level: 90, tags: ["utility-first", "responsive"] },
  { name: "shadcn/ui", level: 75, tags: ["design system"] },
];

const BACKEND: Skill[] = [
  { name: "Node.js", level: 62, tags: ["express"] },
  { name: "REST API", level: 68, tags: ["fetch", "auth"] },
  { name: "SQLite", level: 55, tags: ["lightweight"] },
];

/* ------------------------------------------------------------------ */
/* Yardımcı küçük bileşenler                                          */
/* ------------------------------------------------------------------ */

function SkillRow({ s }: { s: Skill }) {
  return (
    <Card className="rounded-2xl transition hover:shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">{s.name}</CardTitle>
          <span className="text-sm text-muted-foreground">{s.level}%</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="h-2 rounded-full bg-muted">
          <div
            className="h-2 rounded-full bg-primary transition-[width] duration-700"
            style={{ width: `${s.level}%` }}
          />
        </div>
        {s.tags && (
          <div className="flex flex-wrap gap-2">
            {s.tags.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl border p-4 text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs uppercase text-muted-foreground">{label}</div>
      {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sayfa                                                               */
/* ------------------------------------------------------------------ */

export default function Skills() {
  const [tab, setTab] = useState<"frontend" | "backend">("frontend");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"desc" | "asc" | "name">("desc");

  const data = tab === "frontend" ? FRONTEND : BACKEND;

  const filtered = useMemo(() => {
    const base = q
      ? data.filter(
          (s) =>
            s.name.toLowerCase().includes(q.toLowerCase()) ||
            (s.tags ?? []).some((t) => t.toLowerCase().includes(q.toLowerCase()))
        )
      : data.slice();

    if (sort === "name") base.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "asc") base.sort((a, b) => a.level - b.level);
    if (sort === "desc") base.sort((a, b) => b.level - a.level);

    return base;
  }, [data, q, sort]);

  const avg = useMemo(() => Math.round(data.reduce((s, x) => s + x.level, 0) / data.length), [data]);
  const top = useMemo(() => data.slice().sort((a, b) => b.level - a.level)[0], [data]);

  return (
    <Container>
      <div className="py-10 space-y-8">
        {/* Başlık + aksiyonlar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Yetenekler</h1>
            <p className="text-muted-foreground">Kullandığım teknolojiler ve seviyelerim.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => window.open("/cv.pdf", "_blank")}>
              <Download className="mr-2 h-4 w-4" /> CV’yi indir
            </Button>
            <Button asChild>
              <a href="/projects">
                <TrendingUp className="mr-2 h-4 w-4" />
                Projelerde Gör
              </a>
            </Button>
          </div>
        </div>

        {/* Özet panel */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat label="Aktif Kategori" value={tab === "frontend" ? "Frontend" : "Backend"} />
          <Stat label="Ortalama Seviye" value={`${avg}%`} hint="Seçili kategoride" />
          <Stat label="En Güçlü" value={top?.name ?? "-"} hint={`${top?.level ?? 0}%`} />
        </div>

        {/* Toolbar: arama + sıralama */}
        <div className="grid gap-3 sm:grid-cols-[1fr,160px,auto] sm:items-center">
          <label className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Search className="h-4 w-4" />
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ara: react, tailwind, hooks…"
              className="w-full rounded-xl border bg-background py-2 pl-9 pr-3 outline-none focus:ring-2 focus:ring-primary/30"
            />
          </label>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            className="rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="desc">Seviye (yüksek → düşük)</option>
            <option value="asc">Seviye (düşük → yüksek)</option>
            <option value="name">İsim (A → Z)</option>
          </select>

          <Tabs value={tab} onValueChange={(v) => setTab(v as any)}>
            <TabsList>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Kartlar */}
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((s) => (
            <SkillRow key={s.name} s={s} />
          ))}
        </div>

        {/* Öğreniyorum (mini bölüm) */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Şu an Öğreniyorum</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="rounded-2xl">
              <CardContent className="space-y-2 p-4">
                <div className="font-medium">Next.js</div>
                <Progress value={35} />
                <div className="flex gap-2">
                  <Badge variant="outline">app router</Badge>
                  <Badge variant="outline">server actions</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="space-y-2 p-4">
                <div className="font-medium">Zustand</div>
                <Progress value={50} />
                <div className="flex gap-2">
                  <Badge variant="outline">state</Badge>
                  <Badge variant="outline">persist</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="space-y-2 p-4">
                <div className="font-medium">Testing</div>
                <Progress value={40} />
                <div className="flex gap-2">
                  <Badge variant="outline">vitest</Badge>
                  <Badge variant="outline">rtl</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Container>
  );
}
