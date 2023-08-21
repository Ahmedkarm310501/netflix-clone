"use client";
import React from "react";
import MovieList from "./MovieList";
import useFavourites from "@/hooks/useFavorites";
import useMovies from "@/hooks/useMovieList";

type Props = {};

const MoviesContainer = (props: Props) => {
  const { data: movies } = useMovies();
  const { favourites } = useFavourites();

  return (
    <div className="pb-40">
      <MovieList title="Trending Now" data={movies} />
      <MovieList title="My List" data={favourites} />
    </div>
  );
};

export default MoviesContainer;
