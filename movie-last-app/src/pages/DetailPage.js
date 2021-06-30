import axios from "axios";
import React, { useEffect, useState } from "react";
// https://yts-proxy.now.sh/movie_details.json?movie_id=1

// const DetailPage = ({ location })
const DetailPage = ({ location }) => {
  const { id } = location.state.movie;
  const [movie, setMovie] = useState({
    id: "",
    title: "",
    summary: "",
  });

  const getMovie = async () => {
    console.log("id : " + id);
    let result = await axios.get(
      `https://yts-proxy.now.sh/movie_details.json?movie_id=${id}`,
    );
    console.log(result.data);
    setMovie(result.data.data.movie);
  };

  useEffect(() => {
    console.log("실행됨");
    getMovie();
  }, []);

  //return <div>상세보기 페이지 : {movie.title}</div>;
  return (
    <div>
      <h1>상세보기 페이지</h1>
      <hr />
      <ul>
        <li>{movie.id}</li>
        <li>{movie.title}</li>
        <li>{movie.description_full}</li>
      </ul>
      <img src={movie.medium_cover_image} alt={"영화"} />
    </div>
  );
};

export default DetailPage;
