import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");

  useEffect(() => {
    const root = document.documentElement;
    theme === "dark" ? root.classList.add("dark") : root.classList.remove("dark");
  }, [theme]);

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="toggle theme"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
