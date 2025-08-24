import { motion } from "framer-motion";
import { MoveLeft, X } from "lucide-react";
import type { movie_props } from "../constants/interfaces";
import { questions, slideUp } from "../constants/variables";
import NextQuestionIndicator from "./NextQuestionIndicator";
import { useMovieStore } from "../store/useMovieStore";
import { useErrorStore } from "../store/useErrorStore";

type Props = {
  changeQuestions: (dir: "next" | "previous") => void;
};

function QuestionOne({ changeQuestions }: Props) {
  const {
    activeQuestionIndex,
    response,
    setResponse,
    movieFormData,
    setMovieFormData,
    movie_d,
    queryDetails,
    setQueryDetails,
  } = useMovieStore();
  const { setError } = useErrorStore();

  const addFavourite = (movie: movie_props) => {
    if (movieFormData.favourites.find((fav) => fav.id === movie.id)) {
      setError("Movie already in favourites.");
      return;
    }

    setMovieFormData((prev) => ({
      ...prev,
      favourites: [...prev.favourites, movie],
    }));
    setResponse("");
    setQueryDetails(false);
  };

  const removeFavourite = (movie: movie_props) => {
    setMovieFormData((prev) => ({
      ...prev,
      favourites: prev.favourites.filter((fav) => fav.id !== movie.id),
    }));
  };

  return (
    <div>
      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={0}
        onClick={() => changeQuestions("previous")}
        className="flex flex-row justify-between items-center mb-12"
      >
        <button
          className={`flex flex-row gap-x-4 items-center ${
            activeQuestionIndex === 0 ? "text-[#555]" : ""
          }`}
        >
          <MoveLeft />
          <span>back</span>
        </button>

        <span>
          0{activeQuestionIndex + 1}/0{questions.length}
        </span>
      </motion.div>

      <motion.h2
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="text-5xl font-manrope-medium text-center"
      >
        {questions[0].text}
      </motion.h2>

      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="text-lg font-manrope text-center mt-4"
      >
        {questions[0].subtext}
      </motion.p>

      <div className="relative form-control flex items-center mt-16 pb-2 border-white border-b">
        <motion.input
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={3}
          type="text"
          placeholder="Favourite Movie"
          className="grow bg-transparent text-3xl outline-none"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        />
      </div>

      <NextQuestionIndicator />

      {movieFormData.favourites.length > 0 && (
        <div className="favourites flex gap-x-4 mt-8">
          {movieFormData.favourites.map((movie, index) => (
            <div
              key={index}
              className="bg-secondary/50 py-2 px-4 rounded-full flex flex-row gap-x-3 items-center"
            >
              <span className="font-manrope">{movie.title}</span>
              <button
                className="bg-primary text-white rounded-md p-1 duration-300 transition-all cursor-pointer hover:bg-red-600"
                onClick={() => removeFavourite(movie)}
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Floating Elements */}
      {queryDetails && (
        <div className="absolute top-full bg-card border border-border/50 w-full h-40 rounded-xl flex flex-col custom-scrollbar overflow-y-scroll z-10">
          {movie_d.map((movie) => (
            <div
              key={movie.id}
              onClick={() => addFavourite(movie)}
              className="flex flex-col p-4 cursor-pointer hover:bg-primary"
            >
              <h2 className="font-manrope-medium text-lg">{movie.title}</h2>
              <p className="text-sm">{movie.vote_average}/10</p>
            </div>
          ))}
        </div>
      )}
      {/* End of Floating Elements */}
    </div>
  );
}

export default QuestionOne;
