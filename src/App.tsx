import { Github } from "lucide-react";

import { ModeSwitch } from "./components/mode-switch";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-md text-muted-foreground">
            Desenvolvido com 💜 no NLW da Rocketseat
          </span>

          <Separator orientation="vertical" className="h-6"/>

          <Button variant="outline">
            <Github className="w-4 h-4 mr-1" />
            Github
          </Button>
          <ModeSwitch />
        </div>
      </div>
    </ThemeProvider>
  );
}
