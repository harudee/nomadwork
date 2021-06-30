import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MovieBox = styled.div`
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const ImageBox = styled.img`
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const TitleBox = styled.div`
  margin: 0;
  font-weight: 300;
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
`;
const YearBox = styled.div`
  margin: 0;
  font-weight: 300;
  margin-right: 10px;
  font-size: 14px;
`;
const GenresBox = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
`;

const LiBox = styled.li`
  margin-right: 10px;
  font-size: 14px;
`;

// id, title, summary, medium_cover_image, year
//poster는 키값 없음 >> 뭐여
const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <Link
      to={{
        pathname: `/movie/${movie.id}`,
        state: { movie },
      }}
    >
      <MovieBox>
        <ImageBox src={movie.medium_cover_image} />
        <div>
          <TitleBox>{movie.title}</TitleBox>
          <YearBox>{movie.year}</YearBox>
          <GenresBox>
            {movie.genres.map((g, i) => (
              <LiBox key={i}>{g}</LiBox>
            ))}
          </GenresBox>
          <div>{movie.summary.slice(0, 180)}...</div>
        </div>
      </MovieBox>
    </Link>
  );
};

export default Movie;
