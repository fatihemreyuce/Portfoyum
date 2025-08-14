import { useEffect, useState } from "react";
import { getProjects } from "@/services/projects";
import type { Project } from "@/types/project";

interface State {
  data: Project[];
  loading: boolean;
  error: Error | null;
}

export function useProjects() {
  const [state, setState] = useState<State>({ data: [], loading: true, error: null });

  useEffect(() => {
    let alive = true;
    getProjects()
      .then((data) => alive && setState({ data, loading: false, error: null }))
      .catch((e) => alive && setState({ data: [], loading: false, error: e }));
    return () => { alive = false; };
  }, []);

  return state;
}
