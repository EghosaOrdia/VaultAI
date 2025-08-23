export interface movie_props {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
}

export interface MovieFormInput {
  favourites: movie_props[];
  fav_genres: string[];
  fav_actor: string;
  fav_director: string;
  isSimilar: boolean;
}
