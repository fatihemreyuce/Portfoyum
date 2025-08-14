import Container from "@/components/layout/Container";
import ProjectCard from "@/components/blocks/ProjectCard";
import { useProjects } from "../hooks/ useProjects";
import type { Project, Tech } from "@/types/project";
import { useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type ActiveTag = Tech | "all";

export default function Projects() {
  const { data, loading, error } = useProjects();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  // ["all", ...unique techs]
  const tags = useMemo<ActiveTag[]>(() => {
    const s = new Set<ActiveTag>(["all" as const]);
    data.forEach((p) => p.tech.forEach((t) => s.add(t)));
    return Array.from(s);
  }, [data]);

  const [active, setActive] = useState<ActiveTag>("all");

  const filtered = useMemo<Project[]>(() => {
    if (active === "all") return data;
    return data.filter((p) => p.tech.includes(active));
  }, [data, active]);

  if (loading) {
    return (
      <Container>
        <div className="py-10">Yükleniyor…</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div className="py-10 text-red-600">Hata: {error.message}</div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-10 space-y-6">
        <Tabs
          value={active as string}
          onValueChange={(v: string) => setActive(v as ActiveTag)}
        >
          <TabsList className="flex flex-wrap gap-2">
            {tags.map((t) => {
              const count =
                t === "all"
                  ? data.length
                  : data.filter((p) => p.tech.includes(t)).length;
              return (
                <TabsTrigger
                  key={t}
                  value={t as string}
                  className="capitalize data-[state=active]:bg-muted"
                >
                  {t}
                  <span className="ml-2 rounded-full border px-2 text-xs">
                    {count}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value={active as string}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    setSelected(p);
                    setOpen(true);
                  }}
                  className="h-full cursor-pointer"
                >
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-lg">
            {selected && (
              <>
                <DialogHeader>
                  <DialogTitle>{selected.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-3">
                  <p className="text-muted-foreground">{selected.description}</p>
                  <p className="text-sm">Yıl: {selected.year}</p>
                  <p className="text-sm">
                    Teknolojiler: {selected.tech.join(", ")}
                  </p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Container>
  );
}
