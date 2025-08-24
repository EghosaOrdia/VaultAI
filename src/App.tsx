import { ArrowUpRightFromSquare, Film, Star } from "lucide-react";
import "./App.css";

import Questions from "./components/questions";
import GeneratedMovies from "./components/generatedMovies";
import { useViewStore } from "./store/useViewStore";
import { useErrorStore } from "./store/useErrorStore";

function App() {
  const view = useViewStore((state) => state.view);
  const { error } = useErrorStore();

  return (
    <main className="relative min-h-dvh bg-primary text-white flex justify-center font-manrope-light">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-80" />
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Film size={120} className="text-pri" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Star size={80} className="text-pri" />
      </div>

      {view === "questions" && <Questions />}
      {view === "generated" && <GeneratedMovies />}

      {/* Error Messages Alert */}
      {error && (
        <div className="absolute top-4 bg-red-600 text-white p-2">{error}</div>
      )}

      {/* Disclaimer */}
      <div className="absolute w-full bottom-0 p-2">
        <p className="text-white text-center text-sm">
          VaultAI is still a work in progress, we'd love for you to {""}
          <a href="#" className="underline inline-flex gap-x-1 items-center">
            <span>share your feedback</span>
            <ArrowUpRightFromSquare size={12} className="text-white" />
          </a>
        </p>
      </div>
    </main>
  );
}

export default App;
