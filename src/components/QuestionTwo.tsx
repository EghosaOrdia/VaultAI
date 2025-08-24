import { motion } from "framer-motion";
import { MoveLeft, Plus, X } from "lucide-react";
import { questions, slideUp } from "../constants/variables";
import type { MovieFormInput } from "../constants/interfaces";

type Props = {
  changeQuestions: (dir: "next" | "previous") => void;
  movieFormData: MovieFormInput;
  setMovieFormData: React.Dispatch<React.SetStateAction<MovieFormInput>>;
  addGenre: (genre: string) => void;
  activeQuestionIndex: number;
};

function QuestionTwo({
  changeQuestions,
  movieFormData,
  setMovieFormData,
  addGenre,
  activeQuestionIndex,
}: Props) {
  const removeGenre = (genre: string) => {
    setMovieFormData((prev) => ({
      ...prev,
      fav_genres: prev.fav_genres.filter((fav) => fav !== genre),
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
        <button className="flex flex-row gap-x-4 items-center py-2 px-2 rounded-md hover:bg-pri hover:text-white duration-300 transition-all cursor-pointer">
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
        {questions[1].text}
      </motion.h2>

      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="text-lg font-manrope text-center mt-4"
      >
        {questions[1].subtext}
      </motion.p>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={3}
        className="grow flex flex-wrap gap-x-4 gap-y-2 mt-16"
      >
        {movieFormData.fav_genres.map((genre, index) => (
          <div
            key={index}
            className="bg-pri/50 py-2 px-4 rounded-full flex flex-row gap-x-3 items-center text-sm font-manrope-light text-white hover:scale-125 duration-300 transition-all cursor-pointer"
            onClick={() => removeGenre(genre)}
          >
            <span>{genre}</span>
            <X
              size={24}
              className="p-1 rounded-full duration-300 transition-all cursor-pointer hover:bg-pri hover:text-primary"
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={3}
        className="favourites flex flex-wrap gap-x-4 gap-y-2 mt-8"
      >
        {questions[1].options?.map((genre, index) => {
          const isAdded = movieFormData.fav_genres.includes(genre);

          return (
            <div
              key={index}
              className={`${
                isAdded ? "bg-pri" : "bg-primary"
              } py-2 px-4 rounded-full flex flex-row gap-x-3 items-center cursor-pointer`}
              onClick={() => addGenre(genre)}
            >
              <span className="font-manrope">{genre}</span>
              <button className="bg-primary text-white rounded-full p-1 duration-300 transition-all cursor-pointer hover:bg-blue">
                <Plus size={18} />
              </button>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default QuestionTwo;
