import React from "react";

//poster는 키값 없음 >> 뭐여
const Movie = ({ movie }) => {
  console.log(movie);
  return <h4>{movie.title}</h4>;
};

export default Movie;
