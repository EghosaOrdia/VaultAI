export const questions = [
  {
    id: 1,
    text: "What are your favourite movies?",
    subtext: "Help us understand your taste to provide better recommendations",
  },
  {
    id: 2,
    text: "What are your favourite genres?",
    subtext: "Select the movie genres you enjoy most",
    type: "multiple-choice",
    options: [
      "Action",
      "Adventure",
      "Animation",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "History",
      "Horror",
      "Music",
      "Mystery",
      "Romance",
      "Sci-Fi (Science Fiction)",
      "TV Movie",
      "Thriller",
      "War",
      "Western",
    ],
  },
  {
    id: 3,
    text: "Should the recommendations be similar to your favourite movies?",
    subtext: "Choose how we should tailor your recommendations",
  },
];

export const movies = {
  results: [
    {
      id: 1,
      title: "Inception",
      overview:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      vote_average: 8.8,
    },
    {
      id: 2,
      title: "The Dark Knight",
      overview:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      vote_average: 9.0,
    },
  ],
};
