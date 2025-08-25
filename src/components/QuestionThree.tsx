import { motion } from "framer-motion";
import { Sparkles, Check, MoveLeft } from "lucide-react";
import { questions, slideUp } from "../constants/variables";
import { useViewStore } from "../store/useViewStore";
import { useMovieStore } from "../store/useMovieStore";

function QuestionThree() {
  const setView = useViewStore((state) => state.setView);
  const {
    activeQuestionIndex,
    movieFormData,
    setMovieFormData,
    setActiveQuestionIndex,
  } = useMovieStore();

  const setSimilarity = (value: boolean) => {
    setMovieFormData((prev) => ({ ...prev, isSimilar: value }));
  };
  return (
    <div>
      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="flex flex-row justify-between items-center mb-12"
      >
        <button
          onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
          className="flex flex-row gap-x-4 items-center py-2 px-2 rounded-md hover:bg-pri hover:text-white duration-300 transition-all cursor-pointer"
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
        {questions[2].text}
      </motion.h2>

      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="text-lg font-manrope text-center mt-4"
      >
        {questions[2].subtext}
      </motion.p>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={3}
        className="flex flex-row justify-center gap-x-4 mt-16"
      >
        <button
          onClick={() => setSimilarity(true)}
          className={`${
            movieFormData.isSimilar ? "bg-pri" : "bg-primary"
          } py-2 px-12 text-xl font-manrope-medium rounded-full duration-300 transition-all cursor-pointer flex gap-x-4 items-center`}
        >
          Yes {movieFormData.isSimilar && <Check size={18} />}
        </button>
        <button
          onClick={() => setSimilarity(false)}
          className={`${
            movieFormData.isSimilar === false ? "bg-pri" : "bg-primary"
          } py-2 px-12 text-xl font-manrope-medium rounded-full duration-300 transition-all cursor-pointer flex gap-x-4 items-center`}
        >
          No {movieFormData.isSimilar === false && <Check size={18} />}
        </button>
      </motion.div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={4}
        className="mt-8 flex justify-center"
      >
        <button
          onClick={() => setView("generated")}
          className="flex gap-x-2 items-center 
             px-8 py-3 text-lg rounded-full 
             font-manrope-medium text-white 
             bg-gradient-to-r from-pri/50 via-pri/85 to-pri 
             shadow-[0_0_20px_#ff5722] 
             hover:shadow-[0_0_40px_#ff5722] 
             transition-all duration-300 cursor-pointer"
        >
          <Sparkles />
          Generate movies for me
        </button>
      </motion.div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={5}
      >
        <p className="text-lg font-manrope text-center mt-4">
          {movieFormData.isSimilar
            ? "We'll recommend movies similar to your favorites"
            : "We'll recommend movies that explore new genres and styles"}
        </p>
      </motion.div>
    </div>
  );
}

export default QuestionThree;
