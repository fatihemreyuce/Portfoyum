import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/project";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{project.title}</span>
          {project.stars ? (
            <span className="inline-flex items-center gap-1 text-sm">
              <Star className="h-4 w-4" />{project.stars}
            </span>
          ) : null}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex h-full flex-col gap-3">
        <p className="text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>

        <div className="mt-auto flex gap-2">
          {project.demoUrl && (
            <Button asChild size="sm">
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />Demo
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild size="sm" variant="outline">
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />Repo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
