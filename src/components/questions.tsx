import { useEffect, useState } from "react";

import { ArrowUpRightFromSquare, ArrowRight } from "lucide-react";
import { type Variants } from "framer-motion";

import { movies, questions } from "../constants/variables";
import type { MovieFormInput, movie_props } from "../constants/interfaces";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";

const slideUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Questions = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [response, setResponse] = useState("");
  const [queryDetails, setQueryDetails] = useState(false);
  const [error, setError] = useState("");
  const [movie_d, setMovie_d] = useState<movie_props[]>([]);
  const [movieFormData, setMovieFormData] = useState<MovieFormInput>({
    favourites: [],
    fav_genres: [],
    fav_actor: "",
    fav_director: "",
    isSimilar: false,
  });

  const handleError = (message: string) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const changeQuestions = (direction: "next" | "previous") => {
    setActiveQuestionIndex((prev) =>
      direction === "next"
        ? Math.min(prev + 1, questions.length - 1)
        : Math.max(prev - 1, 0)
    );
  };

  const addFavourite = (movie: movie_props) => {
    if (movieFormData.favourites.find((fav) => fav.id === movie.id)) {
      handleError("Movie already in favourites.");
      return;
    }

    setMovieFormData((prev) => ({
      ...prev,
      favourites: [...prev.favourites, movie],
    }));
    setResponse("");
    setQueryDetails(false);
  };

  const addGenre = (genre: string) => {
    if (movieFormData.fav_genres.includes(genre)) {
      handleError("Genre already added.");
      return;
    }
    setMovieFormData((prev) => ({
      ...prev,
      fav_genres: [...prev.fav_genres, genre],
    }));
  };

  // Searches TMDB API
  const handleSearch = async (query: string) => {
    try {
      // const movies = await searchMovie(query);
      setMovie_d(movies.results);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  // handles and validates the submission of each question
  const handleSubmit = (
    event?: KeyboardEvent | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (event && "key" in event && event.key !== "Enter") return;

    if (movieFormData.favourites.length >= 1 && response.trim() === "") {
      changeQuestions("next");
      return;
    }

    if (response.trim() === "") {
      handleError("Please enter a movie before proceeding.");
      return;
    }

    handleSearch(response);
    setQueryDetails(true);
  };

  // handles keypress events for submission
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      handleSubmit(event);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [response, movieFormData.favourites]);

  // resets movie details when the response is cleared
  useEffect(() => {
    if (response.trim() === "") {
      setMovie_d([]);
      setQueryDetails(false);
    }
  }, [response]);

  return (
    <>
      <div className="relative my-auto w-3/5">
        {activeQuestionIndex === 0 && (
          <QuestionOne
            slideUp={slideUp}
            response={response}
            setResponse={setResponse}
            changeQuestions={changeQuestions}
            movieFormData={movieFormData}
            setMovieFormData={setMovieFormData}
            activeQuestionIndex={activeQuestionIndex}
          />
        )}

        {activeQuestionIndex === 1 && (
          <QuestionTwo
            slideUp={slideUp}
            changeQuestions={changeQuestions}
            movieFormData={movieFormData}
            setMovieFormData={setMovieFormData}
            addGenre={addGenre}
            activeQuestionIndex={activeQuestionIndex}
          />
        )}

        {activeQuestionIndex === 2 && (
          <QuestionThree
            slideUp={slideUp}
            changeQuestions={changeQuestions}
            movieFormData={movieFormData}
            setMovieFormData={setMovieFormData}
            activeQuestionIndex={activeQuestionIndex}
          />
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => changeQuestions("previous")}
            className="bg-black border border-border/50 rounded-md py-1 px-4 
          transition-all duration-300 hover:bg-pri hover:text-black cursor-pointer"
          >
            Previous
          </button>

          <button
            onClick={handleSubmit}
            className="bg-pri rounded-md py-1 px-4 transition-all duration-300 font-manrope-light text-black cursor-pointer flex gap-x-2 items-center"
          >
            Continue
            <ArrowRight size={18} />
          </button>
        </div>

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
    </>
  );
};

export default Questions;
