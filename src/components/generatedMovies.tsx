import React from "react";
import { movies } from "../constants/variables";
import { MoveLeft, Sparkles, Star } from "lucide-react";
import { parseDate } from "../services/functions";
import { motion, type Variants } from "framer-motion";
import { useViewStore } from "../store/useViewStore";

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

const GeneratedMovies: React.FC = () => {
  const setView = useViewStore((state) => state.setView);

  return (
    <div className="relative mt-8 py-8 px-16">
      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="flex flex-row justify-between items-center"
      >
        <button
          onClick={() => setView("questions")}
          className="flex flex-row gap-x-4 items-center py-2 px-2 rounded-md hover:bg-pri hover:text-white duration-300 transition-all cursor-pointer"
        >
          <MoveLeft />
          <span>Back to Setup</span>
        </button>
      </motion.div>
      <div className="heading text-center">
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="bg-pri/10 rounded-full p-4 mx-auto size-20"
        >
          <Sparkles className="text-pri size-full" />
        </motion.div>
        <motion.h2
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-5xl font-manrope-medium mt-4"
        >
          Your Movie Recommendations
        </motion.h2>
        <motion.p
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-2"
        >
          Based on your preferences for{" "}
          <span className="text-pri hover:underline cursor-pointer">
            The Dark Knight
          </span>
          ,{" "}
          <span className="text-pri hover:underline cursor-pointer">
            The Shawshank Redemption
          </span>{" "}
          and{" "}
          <span className="text-pri hover:underline cursor-pointer">Drama</span>{" "}
          genres
        </motion.p>
      </div>

      <div className="movies grid grid-cols-3 gap-x-8 gap-y-4 items-start mt-16">
        {movies.results.map((movie, i) => (
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            custom={i}
            key={movie.id}
            className="bg-primary px-4 py-6 rounded-xl border border-border/40 flex flex-col gap-y-2"
          >
            <div className="movie-header">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-manrope-medium">{movie.title}</h2>

                <div className="inline-flex flex-row rounded-full py-1 px-3 gap-x-2 items-center bg-pri/30 text-pri">
                  <Star size={16} className="fill-pri" />
                  <span>{movie.vote_average}</span>
                </div>
              </div>

              <p className="">{parseDate(movie.release_date, "year")}</p>
            </div>

            <div className="movie-body"></div>
            <p>{movie.overview}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GeneratedMovies;
