import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

import { movies, questions } from "../constants/variables";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import { useMovieStore } from "../store/useMovieStore";
import { useErrorStore } from "../store/useErrorStore";

const Questions = () => {
  const {
    activeQuestionIndex,
    setActiveQuestionIndex,
    response,
    setQueryDetails,
    setMovie_d,
    movieFormData,
  } = useMovieStore();
  const { setError } = useErrorStore();

  const changeQuestions = (direction: "next" | "previous") => {
    setActiveQuestionIndex((prev: number) =>
      direction === "next"
        ? Math.min(prev + 1, questions.length - 1)
        : Math.max(prev - 1, 0)
    );
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
      setError("Please enter a movie before proceeding.");
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
        {activeQuestionIndex === 0 && <QuestionOne />}

        {activeQuestionIndex === 1 && <QuestionTwo />}

        {activeQuestionIndex === 2 && <QuestionThree />}

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
      </div>
    </>
  );
};

export default Questions;
