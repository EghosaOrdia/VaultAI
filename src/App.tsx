import { Film, Star } from "lucide-react";
import "./App.css";

import Questions from "./components/questions";
import GeneratedMovies from "./components/generatedMovies";
import { useViewStore } from "./store/useViewStore";

function App() {
  const view = useViewStore((state) => state.view);

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
    </main>
  );
}

export default App;
